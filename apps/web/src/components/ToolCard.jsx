import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ExternalLink, Star, ThumbsUp, ThumbsDown, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const COS_BASE_URL = 'https://engma-ai-lab-1447133791.cos.ap-shanghai.myqcloud.com/reports/pdf/';

function ToolCard({ tool, index = 0 }) {
  const navigate = useNavigate();

  const pdfHref = tool.pdfFileName ? COS_BASE_URL + tool.pdfFileName : '';
  const hasPdf = Boolean(tool.pdfFileName && tool.pdfFileName.trim() !== '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <div 
        onClick={() => navigate(`/ai-tools/${tool.id}`)}
        className="bg-card rounded-2xl p-6 border border-border shadow-sm cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/50 flex flex-col h-full group relative"
        role="button"
        tabIndex={0}
        aria-label={`View details for ${tool.toolName}`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors pr-12">
                {tool.toolName}
              </h3>
              {tool.recommendationScore && (
                <div className="inline-flex items-center text-sm font-semibold text-primary mt-1">
                  <Star className="w-4 h-4 mr-1 fill-primary" />
                  {tool.recommendationScore} / 10
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
          {tool.website && (
            <a 
              href={tool.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Visit ${tool.toolName} website`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {hasPdf && (
            <a 
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-xs font-medium bg-secondary/50 px-2 py-1 rounded-md"
              title="View PDF Report"
            >
              <FileText className="h-4 w-4" />
              PDF
            </a>
          )}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6 mt-2">
          {tool.shortDescription}
        </p>

        {tool.prosAndCons && (
          <div className="mt-auto space-y-2 pt-4 border-t border-border/50 text-sm">
            {tool.prosAndCons.pros && tool.prosAndCons.pros.length > 0 && (
              <div className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400">
                <ThumbsUp className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{tool.prosAndCons.pros[0]}</span>
              </div>
            )}
            {tool.prosAndCons.cons && tool.prosAndCons.cons.length > 0 && (
              <div className="flex items-start gap-2 text-rose-600 dark:text-rose-400">
                <ThumbsDown className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{tool.prosAndCons.cons[0]}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ToolCard;