import { memo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

const cardClassName =
  'border-border card-hover flex h-full flex-col overflow-hidden rounded-[var(--radius-card-lg)] border bg-white';

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
              className="font-display rounded-[10px] px-3 py-1 text-sm"
              style={{ backgroundColor: tagBg, color: tagText }}
            >
              {tag}
            </span>
            <span className="font-body text-text text-xs font-semibold">{readTime}</span>
          </div>
          <p className="font-display text-text text-xl">{title}</p>
          <p className="type-body text-sm">{excerpt}</p>
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
              <p className="font-display text-text text-sm">{author}</p>
              <p className="font-body text-muted text-xs">{date}</p>
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
