
import React from 'react';
import PostCard from '@/components/PostCard';
import FloatingElements from '@/components/FloatingElements';
import { TreePine, Plus, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = [
    {
      id: '1',
      user: {
        name: 'Maria Silva',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b108?w=150',
        location: 'São Paulo, SP'
      },
      image: 'photo-1509316975850-ff9c5deb0cd9',
      description: 'Minha primeira árvore! Um pinheiro que plantei no quintal. Está crescendo muito bem e já tem 2 metros de altura! 🌲',
      treeType: 'Pinheiro',
      plantedDate: '15 de Janeiro de 2024',
      likes: 24,
      comments: [
        {
          id: '1',
          user: 'João Santos',
          text: 'Que lindo! Parabéns pela dedicação!',
          timestamp: '2h'
        },
        {
          id: '2',
          user: 'Ana Costa',
          text: 'Inspirador! Também quero plantar uma.',
          timestamp: '1h'
        }
      ]
    },
    {
      id: '2',
      user: {
        name: 'Carlos Oliveira',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        location: 'Rio de Janeiro, RJ'
      },
      image: 'photo-1513836279014-a89f7a76ae86',
      description: 'Floresta urbana em crescimento! Essas árvores foram plantadas pela nossa comunidade há 6 meses. O resultado é incrível! 🌳',
      treeType: 'Ipê Amarelo',
      plantedDate: '10 de Agosto de 2023',
      likes: 87,
      comments: [
        {
          id: '1',
          user: 'Sandra Lima',
          text: 'Projeto maravilhoso! Como posso participar?',
          timestamp: '4h'
        }
      ]
    },
    {
      id: '3',
      user: {
        name: 'Fernanda Rocha',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        location: 'Curitiba, PR'
      },
      image: 'photo-1518495973542-4542c06a5843',
      description: 'A luz do sol filtrando pelas folhas da minha árvore favorita. Cada folha conta uma história de crescimento e esperança. ☀️🍃',
      treeType: 'Carvalho',
      plantedDate: '22 de Março de 2023',
      likes: 156,
      comments: [
        {
          id: '1',
          user: 'Pedro Alves',
          text: 'Foto incrível! Que paz transmite.',
          timestamp: '6h'
        },
        {
          id: '2',
          user: 'Lucia Martins',
          text: 'Essa árvore está gigante! Lembro quando era só uma muda.',
          timestamp: '3h'
        }
      ]
    },
    {
      id: '4',
      user: {
        name: 'Roberto Mendes',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        location: 'Belo Horizonte, MG'
      },
      image: 'photo-1426604966848-d7adac402bff',
      description: 'Vista da montanha onde plantamos 50 mudas no último mutirão. A natureza agradece! 🏔️🌱',
      treeType: 'Eucalipto',
      plantedDate: '05 de Dezembro de 2023',
      likes: 203,
      comments: [
        {
          id: '1',
          user: 'Camila Ferreira',
          text: 'Que vista espetacular! Vocês são incríveis.',
          timestamp: '8h'
        }
      ]
    },
    {
      id: '5',
      user: {
        name: 'Isabella Torres',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150',
        location: 'Salvador, BA'
      },
      image: 'photo-1523712999610-f77fbcfc3843',
      description: 'Raios dourados de esperança! Esta floresta que ajudamos a plantar está se tornando um santuário de biodiversidade. 🌅',
      treeType: 'Pau-brasil',
      plantedDate: '18 de Junho de 2023',
      likes: 341,
      comments: [
        {
          id: '1',
          user: 'Miguel Santos',
          text: 'Orgulho de fazer parte deste projeto!',
          timestamp: '12h'
        },
        {
          id: '2',
          user: 'Sophia Reis',
          text: 'A vida renascendo! Que lindo trabalho.',
          timestamp: '10h'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen nature-gradient leaf-pattern relative overflow-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-10 py-4 px-4 bg-white/20 backdrop-blur-sm border-b border-nature-200">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                <TreePine className="w-6 h-6 text-nature-700" />
              </div>
              <h1 className="text-xl font-bold text-nature-800">EcoPlant</h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-nature-700 hover:text-nature-800">
                <Home className="w-5 h-5 mr-2" />
                Início
              </Button>
            </Link>
            <Button size="sm" className="bg-nature-500 hover:bg-nature-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Nova Postagem
            </Button>
          </div>
        </div>
      </header>

      {/* Posts Feed */}
      <main className="relative z-10 py-6 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-nature-800 mb-2">Feed da Comunidade</h2>
            <p className="text-sage-600">Acompanhe o crescimento das árvores da nossa comunidade verde</p>
          </div>
          
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-nature-300 text-nature-700 hover:bg-nature-50"
            >
              Carregar mais posts
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Posts;
