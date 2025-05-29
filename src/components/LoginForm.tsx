
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Lock, Eye, EyeOff, TreePine } from 'lucide-react';

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Aqui seria implementada a lógica de login
  };

  return (
    <Card className="w-full max-w-md backdrop-blur-sm bg-white/95 shadow-xl border-sage-200 animate-fade-in">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-nature-100">
            <TreePine className="w-8 h-8 text-nature-600" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-nature-800">Bem-vindo de volta!</CardTitle>
        <CardDescription className="text-sage-600">
          Continue sua jornada de plantio e crescimento
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-nature-700 font-medium">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-sage-300 focus:border-nature-500 focus:ring-nature-500"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-nature-700 font-medium">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-sage-300 text-nature-600 focus:ring-nature-500" />
              <span className="text-sage-600">Lembrar de mim</span>
            </label>
            <button type="button" className="text-nature-600 hover:text-nature-700 hover:underline">
              Esqueceu a senha?
            </button>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-nature-600 hover:bg-nature-700 text-white font-medium py-3 transition-all duration-200 transform hover:scale-[1.02]"
          >
            Entrar
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
          Não tem uma conta?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-nature-600 hover:text-nature-700 font-medium hover:underline"
          >
            Plante sua primeira semente
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
