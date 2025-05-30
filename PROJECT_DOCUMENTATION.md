
# Portfolio Créatrice Digital - Documentation Technique

## Vue d'ensemble du projet

Ce portfolio moderne est conçu pour une créatrice digitale spécialisée en design et développement full-stack. Il présente ses compétences, projets et permet aux clients potentiels de la contacter.

## Architecture Frontend (Actuelle)

### Technologies utilisées
- **React 18** avec TypeScript
- **Vite** comme bundler
- **Tailwind CSS** pour le styling
- **shadcn/ui** pour les composants UI
- **React Router DOM** pour la navigation
- **Lucide React** pour les icônes
- **Framer Motion** (potentiel) pour les animations avancées

### Structure des composants
```
src/
├── components/
│   ├── ui/                 # Composants shadcn/ui
│   ├── Navigation.tsx      # Barre de navigation fixe
│   ├── Hero.tsx           # Section héro avec CTA
│   ├── About.tsx          # Section à propos
│   ├── Skills.tsx         # Compétences techniques
│   ├── Projects.tsx       # Portfolio de projets
│   ├── Contact.tsx        # Formulaire de contact
│   ├── Footer.tsx         # Pied de page
│   └── Logo.tsx           # Logo personnalisé
├── pages/
│   ├── Index.tsx          # Page d'accueil
│   ├── Blog.tsx           # Page blog
│   ├── Portfolio.tsx      # Page portfolio détaillée
│   └── NotFound.tsx       # Page 404
└── hooks/                 # Hooks personnalisés
```

## Spécifications Backend (À implémenter)

### Base de données recommandée : PostgreSQL

#### Table `users` (Administrateur)
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    avatar_url TEXT,
    bio TEXT,
    linkedin_url TEXT,
    github_url TEXT,
    website_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Table `skills` (Compétences)
```sql
CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'frontend', 'backend', 'design', 'tools'
    proficiency_level INTEGER CHECK (proficiency_level >= 1 AND proficiency_level <= 100),
    icon_name VARCHAR(100), -- Nom de l'icône Lucide
    color VARCHAR(7), -- Code couleur hexadécimal
    display_order INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Table `projects` (Projets portfolio)
```sql
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT,
    featured_image_url TEXT,
    gallery_images JSONB, -- Array d'URLs d'images
    technologies JSONB, -- Array de technologies utilisées
    project_url TEXT,
    github_url TEXT,
    status VARCHAR(50) DEFAULT 'completed', -- 'in_progress', 'completed', 'archived'
    client_name VARCHAR(255),
    project_type VARCHAR(100), -- 'web', 'mobile', 'design', 'branding'
    completion_date DATE,
    is_featured BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Table `blog_posts` (Articles de blog)
```sql
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image_url TEXT,
    author_id UUID REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'draft', -- 'draft', 'published', 'archived'
    tags JSONB, -- Array de tags
    reading_time INTEGER, -- Temps de lecture estimé en minutes
    seo_title VARCHAR(255),
    seo_description TEXT,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Table `contact_messages` (Messages de contact)
```sql
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    phone VARCHAR(50),
    budget_range VARCHAR(100),
    project_type VARCHAR(100),
    timeline VARCHAR(100),
    status VARCHAR(50) DEFAULT 'new', -- 'new', 'read', 'replied', 'archived'
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Table `testimonials` (Témoignages clients)
```sql
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name VARCHAR(255) NOT NULL,
    client_position VARCHAR(255),
    client_company VARCHAR(255),
    client_avatar_url TEXT,
    testimonial_text TEXT NOT NULL,
    project_id UUID REFERENCES projects(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    is_featured BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Table `analytics` (Statistiques du site)
```sql
CREATE TABLE analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_path VARCHAR(255) NOT NULL,
    visitor_id UUID,
    session_id UUID,
    referrer TEXT,
    user_agent TEXT,
    ip_address INET,
    country VARCHAR(100),
    device_type VARCHAR(50), -- 'desktop', 'mobile', 'tablet'
    browser VARCHAR(100),
    visit_duration INTEGER, -- en secondes
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## API Endpoints recommandés

### Publiques (Frontend)
- `GET /api/projects` - Liste des projets
- `GET /api/projects/:slug` - Détails d'un projet
- `GET /api/blog` - Articles de blog
- `GET /api/blog/:slug` - Article de blog spécifique
- `GET /api/skills` - Liste des compétences
- `GET /api/testimonials` - Témoignages clients
- `POST /api/contact` - Envoi de message de contact

### Administration (Dashboard)
- `POST /api/auth/login` - Connexion admin
- `POST /api/auth/logout` - Déconnexion
- `GET /api/admin/dashboard` - Statistiques générales
- `CRUD /api/admin/projects` - Gestion des projets
- `CRUD /api/admin/blog` - Gestion du blog
- `CRUD /api/admin/skills` - Gestion des compétences
- `GET /api/admin/messages` - Messages de contact
- `GET /api/admin/analytics` - Données analytiques

## Fonctionnalités à implémenter

### Phase 1 - Backend Core
1. API REST avec authentification JWT
2. Upload et gestion des images
3. Système de gestion de contenu (CMS)
4. Formulaire de contact avec email
5. Analytics basiques

### Phase 2 - Fonctionnalités avancées
1. Dashboard d'administration
2. Système de cache (Redis)
3. Optimisation SEO
4. Newsletter/mailing list
5. Commentaires sur le blog
6. Recherche avancée
7. Multi-langue (i18n)

### Phase 3 - Optimisations
1. CDN pour les images
2. Analytics avancées
3. A/B testing
4. Performance monitoring
5. Backup automatique

## Recommandations techniques

### Backend Framework
- **Node.js** avec Express.js ou Fastify
- **Python** avec FastAPI ou Django
- **Go** avec Gin ou Echo
- **Rust** avec Actix-web

### Base de données
- **PostgreSQL** (recommandé) pour les données relationnelles
- **Redis** pour le cache et les sessions
- **S3/Cloudinary** pour le stockage d'images

### Déploiement
- **Vercel/Netlify** pour le frontend
- **Railway/Render/DigitalOcean** pour le backend
- **Supabase** comme alternative all-in-one

### Sécurité
- Validation des entrées (Zod/Joi)
- Rate limiting
- CORS configuré
- Sanitisation des données
- Protection CSRF
- Chiffrement des mots de passe (bcrypt)

## Variables d'environnement nécessaires

```env
# Base de données
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# Email (pour les notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Upload d'images
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Analytics
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX

# Environnement
NODE_ENV=production
PORT=3000
```

## Prochaines étapes recommandées

1. Choisir et configurer le framework backend
2. Créer la base de données et les migrations
3. Implémenter l'authentification
4. Développer les APIs de base
5. Créer le dashboard d'administration
6. Intégrer le frontend avec le backend
7. Tests et déploiement

Cette documentation servira de référence pour l'implémentation du backend et l'évolution future du projet.
