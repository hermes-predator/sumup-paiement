import React, { useState } from 'react';
import { GalleryItem as GalleryItemType } from '@/types/gallery';
import GalleryItem from './GalleryItem';
import GallerySkeleton from './GallerySkeleton';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationEllipsis 
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ClubGalleryProps {
  items: GalleryItemType[];
  isLoading: boolean;
}

const ITEMS_PER_PAGE = 12;

const ClubGallery = ({ items, isLoading }: ClubGalleryProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getVisiblePages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    
    if (currentPage <= 3) return [1, 2, 3, 4, 'ellipsis', totalPages];
    if (currentPage >= totalPages - 2) return [1, 'ellipsis', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    
    return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <GallerySkeleton key={index} />
          ))
        ) : (
          currentItems.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onHover={setHoveredItem}
              isHovered={hoveredItem === item.id}
            />
          ))
        )}
      </div>

      {!isLoading && totalPages > 1 && (
        <Pagination className="my-12">
          <PaginationContent className="gap-3">
            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                className={`w-14 h-14 p-0 flex items-center justify-center rounded-full bg-white
                  shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 border-2
                  ${currentPage === 1 
                    ? 'opacity-50 cursor-not-allowed border-gray-100' 
                    : 'border-gray-200/80 hover:border-primary/90 hover:text-primary hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] cursor-pointer'
                  }`}
              >
                <ChevronLeft className="h-6 w-6 stroke-[2.5px]" />
              </PaginationLink>
            </PaginationItem>

            {getVisiblePages().map((page, index) => (
              <PaginationItem key={index}>
                {page === 'ellipsis' ? (
                  <PaginationEllipsis className="text-gray-400 mx-0.5" />
                ) : (
                  <PaginationLink
                    onClick={() => setCurrentPage(page as number)}
                    isActive={currentPage === page}
                    className={`w-14 h-14 p-0 flex items-center justify-center rounded-full text-lg
                      transition-all duration-300 cursor-pointer font-medium backdrop-blur-sm
                      ${currentPage === page 
                        ? 'bg-primary text-white shadow-[0_8px_16px_rgba(59,130,246,0.25)] border-2 border-primary/90' 
                        : 'bg-white border-2 border-gray-200/80 hover:border-primary/90 hover:text-primary shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]'
                      }`}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                className={`w-14 h-14 p-0 flex items-center justify-center rounded-full bg-white
                  shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 border-2
                  ${currentPage === totalPages 
                    ? 'opacity-50 cursor-not-allowed border-gray-100' 
                    : 'border-gray-200/80 hover:border-primary/90 hover:text-primary hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] cursor-pointer'
                  }`}
              >
                <ChevronRight className="h-6 w-6 stroke-[2.5px]" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ClubGallery;
