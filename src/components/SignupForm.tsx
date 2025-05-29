
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Lock, User, Eye, EyeOff, Flower } from 'lucide-react';

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', formData);
    // Aqui seria implementada a lógica de cadastro
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-md backdrop-blur-sm bg-white/95 shadow-xl border-sage-200 animate-fade-in">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-nature-100">
            <Flower className="w-8 h-8 text-nature-600" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-nature-800">Plante sua primeira semente</CardTitle>
        <CardDescription className="text-sage-600">
          Junte-se à nossa comunidade verde e comece sua jornada sustentável
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-nature-700 font-medium">Nome completo</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="pl-10 border-sage-300 focus:border-nature-500 focus:ring-nature-500"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="signup-email" className="text-nature-700 font-medium">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
              <Input
                id="signup-email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pl-10 border-sage-300 focus:border-nature-500 focus:ring-nature-500"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="signup-password" className="text-nature-700 font-medium">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-10 pr-10 border-sage-300 focus:border-nature-500 focus:ring-nature-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sage-500 hover:text-nature-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-nature-700 font-medium">Confirmar senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="pl-10 pr-10 border-sage-300 focus:border-nature-500 focus:ring-nature-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-sage-500 hover:text-nature-600"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          
          <div className="flex items-start space-x-2 text-sm">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 rounded border-sage-300 text-nature-600 focus:ring-nature-500"
              required
            />
            <label htmlFor="terms" className="text-sage-600 leading-relaxed">
              Aceito os{' '}
              <button type="button" className="text-nature-600 hover:text-nature-700 hover:underline">
                termos de uso
              </button>
              {' '}e{' '}
              <button type="button" className="text-nature-600 hover:text-nature-700 hover:underline">
                política de privacidade
              </button>
            </label>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-nature-600 hover:bg-nature-700 text-white font-medium py-3 transition-all duration-200 transform hover:scale-[1.02]"
          >
            Começar a plantar
          </Button>
        </form>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-4">
        <div className="relative w-full">
          <Separator className="bg-sage-300" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-sage-500">
            ou
          </span>
        </div>
        
        <div className="text-center text-sm text-sage-600">
          Já tem uma conta?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-nature-600 hover:text-nature-700 font-medium hover:underline"
          >
            Faça login
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
