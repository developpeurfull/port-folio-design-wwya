
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Les tendances du design web en 2024",
      excerpt: "Découvrez les dernières innovations en matière de design web et comment les intégrer dans vos projets.",
      date: "15 Mars 2024",
      readTime: "5 min",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "React 19 : Nouvelles fonctionnalités",
      excerpt: "Un aperçu des nouvelles fonctionnalités de React 19 et leur impact sur le développement moderne.",
      date: "12 Mars 2024",
      readTime: "8 min",
      category: "Développement",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "L'art de l'UX Design centré utilisateur",
      excerpt: "Comment créer des expériences utilisateur mémorables en plaçant l'humain au centre du processus.",
      date: "8 Mars 2024",
      readTime: "6 min",
      category: "UX Design",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mes réflexions sur le design, le développement et les tendances du web moderne.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0">
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                        Lire l'article
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
