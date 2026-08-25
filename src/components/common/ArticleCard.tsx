import { memo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

interface ArticleCardProps {
  image: string;
  tag: string;
  tagBg: string;
  tagText: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  authorPhoto: string;
  date: string;
  href?: string;
}

function CardContent({
  image,
  tag,
  tagBg,
  tagText,
  readTime,
  title,
  excerpt,
  author,
  authorPhoto,
  date,
}: ArticleCardProps) {
  const { isDark } = useTheme();

  return (
    <>
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col justify-between gap-5 p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="font-display rounded-[10px] px-3 py-1 text-sm transition-colors duration-300"
              style={{ backgroundColor: tagBg, color: tagText }}
            >
              {tag}
            </span>
            <span
              className={cn(
                'font-body text-xs font-semibold',
                isDark ? 'text-white/80' : 'text-text',
              )}
            >
              {readTime}
            </span>
          </div>
          <p
            className={cn(
              'font-display text-xl font-medium',
              isDark ? 'text-white' : 'text-text',
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              'type-body text-sm',
              isDark ? 'text-white/70' : 'text-text-body',
            )}
          >
            {excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={authorPhoto}
              alt={author}
              loading="lazy"
              decoding="async"
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <div>
              <p
                className={cn(
                  'font-display text-sm font-medium',
                  isDark ? 'text-white' : 'text-text',
                )}
              >
                {author}
              </p>
              <p
                className={cn(
                  'font-body text-xs',
                  isDark ? 'text-white/50' : 'text-muted',
                )}
              >
                {date}
              </p>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </>
  );
}

function ArticleCardComponent(props: ArticleCardProps): ReactNode {
  const { isDark } = useTheme();

  const cardClassName = cn(
    'card-hover flex h-full flex-col overflow-hidden rounded-[var(--radius-card-lg)]  backdrop-blur-sm transition-colors duration-300 bg-(--color-background)',
    isDark ? '' : 'border-border',
  );

  if (props.href) {
    return (
      <Link to={props.href} className={cardClassName}>
        <CardContent {...props} />
      </Link>
    );
  }

  return (
    <article className={cardClassName}>
      <CardContent {...props} />
    </article>
  );
}

export const ArticleCard = memo(ArticleCardComponent);
