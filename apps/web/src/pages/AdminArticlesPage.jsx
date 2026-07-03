import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Plus, Edit2, Trash2, Eye, FileText, Search } from 'lucide-react';
import pb from '@/lib/pocketbaseClient.js';
import { Button } from '@/components/ui/button.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleForm from '@/components/ArticleForm.jsx';
import { toast } from 'sonner';

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const records = await pb.collection('articles').getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setArticles(records);
    } catch (err) {
      console.error('Error fetching articles:', err);
      toast.error('Failed to load articles');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      try {
        await pb.collection('articles').delete(id, { $autoCancel: false });
        toast.success('Article deleted successfully');
        setArticles((prev) => prev.filter(a => a.id !== id));
      } catch (err) {
        toast.error('Failed to delete article');
      }
    }
  };

  const handleCreateNew = () => {
    setCurrentArticle(null);
    setIsEditing(true);
  };

  const handleEdit = (article) => {
    setCurrentArticle(article);
    setIsEditing(true);
  };

  const handleFormSuccess = () => {
    setIsEditing(false);
    fetchArticles();
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Helmet>
        <title>Manage Articles - Admin Dashboard</title>
      </Helmet>
      
      <Header />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Articles Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage lab publications, news, and insights.</p>
          </div>
          {!isEditing && (
            <Button onClick={handleCreateNew} className="rounded-full shadow-sm">
              <Plus className="w-4 h-4 mr-2" /> Create New Article
            </Button>
          )}
        </div>

        {isEditing ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <ArticleForm 
              article={currentArticle} 
              onSuccess={handleFormSuccess}
              onCancel={() => setIsEditing(false)}
            />
          </div>
        ) : (
          <div className="bg-card border border-border shadow-sm rounded-xl overflow-hidden">
            {isLoading ? (
              <div className="p-10 flex justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : articles.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-16 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-card-foreground">No articles found</h3>
                <p className="text-muted-foreground mt-1 mb-6 max-w-sm">
                  You haven't published any articles yet. Create your first post to get started.
                </p>
                <Button onClick={handleCreateNew} variant="outline">
                  <Plus className="w-4 h-4 mr-2" /> Create Article
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/50 text-muted-foreground uppercase tracking-wider text-xs border-b border-border">
                    <tr>
                      <th className="px-6 py-4 font-medium">Title</th>
                      <th className="px-6 py-4 font-medium">Category</th>
                      <th className="px-6 py-4 font-medium">Author</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {articles.map((article) => (
                      <tr key={article.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-card-foreground">{article.title}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground">
                            {article.category || 'Uncategorized'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {article.author || '-'}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                          {article.date ? new Date(article.date).toLocaleDateString() : '-'}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="w-8 h-8 text-muted-foreground hover:text-primary"
                              onClick={() => window.open(`/article/${article.id}`, '_blank')}
                              title="View"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="w-8 h-8 text-muted-foreground hover:text-foreground"
                              onClick={() => handleEdit(article)}
                              title="Edit"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="w-8 h-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                              onClick={() => handleDelete(article.id, article.title)}
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}