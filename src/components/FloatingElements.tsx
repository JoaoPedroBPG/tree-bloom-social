
import React from 'react';
import { TreePine, Flower, Trees, TreeDeciduous } from 'lucide-react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Árvore flutuante 1 */}
      <div className="absolute top-20 left-10 floating-animation opacity-20">
        <TreePine className="w-12 h-12 text-nature-400" style={{ animationDelay: '0s' }} />
      </div>
      
      {/* Flor flutuante 1 */}
      <div className="absolute top-32 right-16 floating-animation opacity-25">
        <Flower className="w-8 h-8 text-sage-500" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Árvore flutuante 2 */}
      <div className="absolute bottom-40 left-8 floating-animation opacity-15">
        <Trees className="w-16 h-16 text-nature-300" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Árvore flutuante 3 */}
      <div className="absolute bottom-20 right-20 floating-animation opacity-20">
        <TreeDeciduous className="w-10 h-10 text-sage-400" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Flor flutuante 2 */}
      <div className="absolute top-64 left-1/4 floating-animation opacity-30">
        <Flower className="w-6 h-6 text-nature-500" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Elementos adicionais para telas maiores */}
      <div className="hidden lg:block">
        <div className="absolute top-16 right-1/3 floating-animation opacity-15">
          <TreePine className="w-14 h-14 text-sage-300" style={{ animationDelay: '2.5s' }} />
        </div>
        
        <div className="absolute bottom-32 left-1/3 floating-animation opacity-25">
          <Flower className="w-7 h-7 text-nature-400" style={{ animationDelay: '3s' }} />
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
