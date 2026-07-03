import React from 'react';
import { articlesData } from '@/data/articlesData.js';
import ArticleCard from '@/components/ArticleCard.jsx';

function RelatedArticles({ currentArticleId, categories }) {
  const relatedArticles = articlesData
    .filter(article => 
      article.id !== currentArticleId && 
      article.category.some(cat => categories.includes(cat))
    )
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Related articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </section>
  );
}

export default RelatedArticles;