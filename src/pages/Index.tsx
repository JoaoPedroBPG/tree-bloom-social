
import React, { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm';
import FloatingElements from '@/components/FloatingElements';
import { TreePine, Sprout, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen nature-gradient leaf-pattern relative overflow-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-10 py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
              <TreePine className="w-8 h-8 text-nature-700" />
            </div>
            <h1 className="text-2xl font-bold text-nature-800">EcoPlant</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-nature-700">
            <div className="flex items-center space-x-2">
              <Sprout className="w-5 h-5" />
              <span className="text-sm font-medium">Plante & Acompanhe</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Comunidade Verde</span>
            </div>
            <Link to="/posts">
              <Button variant="outline" size="sm" className="border-nature-300 text-nature-700 hover:bg-nature-50">
                Ver Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado esquerdo - Informações do app */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-nature-800 leading-tight">
                Cultive um mundo
                <span className="block text-nature-600">mais verde</span>
              </h2>
              <p className="text-lg text-sage-700 leading-relaxed max-w-lg">
                Plante árvores virtuais, acompanhe seu crescimento e conecte-se com uma comunidade 
                apaixonada por sustentabilidade. Cada semente plantada aqui pode se tornar realidade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-white/30 backdrop-blur-sm">
                <div className="text-2xl font-bold text-nature-700">1.2M+</div>
                <div className="text-sm text-sage-600">Árvores plantadas</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/30 backdrop-blur-sm">
                <div className="text-2xl font-bold text-nature-700">50K+</div>
                <div className="text-sm text-sage-600">Usuários ativos</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/30 backdrop-blur-sm">
                <div className="text-2xl font-bold text-nature-700">200+</div>
                <div className="text-sm text-sage-600">Espécies diferentes</div>
              </div>
            </div>

            {/* Call to action para ver posts */}
            <div className="pt-4">
              <Link to="/posts">
                <Button className="bg-nature-500 hover:bg-nature-600 text-white px-6 py-3 text-lg">
                  Explorar Comunidade
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Lado direito - Formulário */}
          <div className="flex justify-center lg:justify-end">
            {isLogin ? (
              <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
            ) : (
              <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm text-sage-600">
            © 2024 EcoPlant. Transformando o mundo uma árvore por vez. 🌱
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
