import { useState, useCallback } from 'react';
import { questions } from './data/questions';
import { personalityTypes } from './data/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Brain, 
  Atom, 
  Zap, 
  Telescope, 
  Microscope,
  Rocket,
  RefreshCw,
  Share2,
  ChevronRight,
  Sparkles,
  Calculator,
  FlaskConical,
  Orbit,
  Globe,
  Lightbulb,
  Target
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Scores {
  I: number;
  D: number;
  T: number;
  E: number;
  M: number;
  C: number;
  N: number;
  R: number;
}

const initialScores: Scores = {
  I: 0, D: 0, T: 0, E: 0,
  M: 0, C: 0, N: 0, R: 0
};

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz' | 'result'>('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [, setAnswers] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startQuiz = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentView('quiz');
      setCurrentQuestion(0);
      setScores(initialScores);
      setAnswers([]);
      setIsAnimating(false);
    }, 300);
  }, []);

  const handleAnswer = useCallback((optionIndex: number) => {
    const question = questions[currentQuestion];
    const selectedScores = question.options[optionIndex].scores;
    
    setScores(prev => ({
      I: prev.I + selectedScores.I,
      D: prev.D + selectedScores.D,
      T: prev.T + selectedScores.T,
      E: prev.E + selectedScores.E,
      M: prev.M + selectedScores.M,
      C: prev.C + selectedScores.C,
      N: prev.N + selectedScores.N,
      R: prev.R + selectedScores.R,
    }));
    
    setAnswers(prev => [...prev, optionIndex]);

    if (currentQuestion < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      setTimeout(() => {
        setCurrentView('result');
      }, 400);
    }
  }, [currentQuestion]);

  const restartQuiz = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentView('home');
      setCurrentQuestion(0);
      setScores(initialScores);
      setAnswers([]);
      setIsAnimating(false);
    }, 300);
  }, []);

  const calculatePersonalityType = useCallback(() => {
    const dimension1 = scores.I >= scores.D ? 'I' : 'D';
    const dimension2 = scores.T >= scores.E ? 'T' : 'E';
    const dimension3 = scores.M >= scores.C ? 'M' : 'C';
    const dimension4 = scores.N >= scores.R ? 'N' : 'R';
    return dimension1 + dimension2 + dimension3 + dimension4;
  }, [scores]);

  const getPersonalityType = useCallback(() => {
    const code = calculatePersonalityType();
    return personalityTypes.find(type => type.code === code) || personalityTypes[0];
  }, [calculatePersonalityType]);

  const getDimensionPercentages = useCallback(() => {
    const total1 = scores.I + scores.D;
    const total2 = scores.T + scores.E;
    const total3 = scores.M + scores.C;
    const total4 = scores.N + scores.R;
    
    return {
      I: total1 > 0 ? Math.round((scores.I / total1) * 100) : 50,
      D: total1 > 0 ? Math.round((scores.D / total1) * 100) : 50,
      T: total2 > 0 ? Math.round((scores.T / total2) * 100) : 50,
      E: total2 > 0 ? Math.round((scores.E / total2) * 100) : 50,
      M: total3 > 0 ? Math.round((scores.M / total3) * 100) : 50,
      C: total3 > 0 ? Math.round((scores.C / total3) * 100) : 50,
      N: total4 > 0 ? Math.round((scores.N / total4) * 100) : 50,
      R: total4 > 0 ? Math.round((scores.R / total4) * 100) : 50,
    };
  }, [scores]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Home View
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className={cn(
          "w-full max-w-2xl transition-all duration-300",
          isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
        )}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Atom className="w-10 h-10 text-cyan-400 animate-spin-slow" />
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                PBTI
              </h1>
            </div>
            <p className="text-cyan-400 text-lg font-medium tracking-wide">
              Physicist Brain Type Indicator
            </p>
            <p className="text-slate-400 text-sm mt-1">「探索你的物理学思维方式」</p>
          </div>

          {/* Main Card */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl" />
                  <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full p-6">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                测测你是什么样的物理学人
              </h2>
              <p className="text-slate-300 text-center mb-8">
                25道题 · 16种物理学人格
                <br />
                <span className="text-slate-400">你是量子先知、宇宙诗人还是精密测量师？</span>
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  加权计分
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Calculator className="w-3 h-3 mr-1" />
                  科学分析
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  仅图一乐
                </Badge>
              </div>

              {/* Start Button */}
              <Button
                onClick={startQuiz}
                className="w-full py-6 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <Zap className="w-5 h-5 mr-2" />
                开始测试
                <Zap className="w-5 h-5 ml-2" />
              </Button>

              {/* Disclaimer */}
              <p className="text-slate-500 text-xs text-center mt-6">
                * 纯属娱乐，勿对号入座
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
              <Telescope className="w-4 h-4" />
              <span>加权计分 · 25题 · 16种人格</span>
              <Microscope className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz View
  if (currentView === 'quiz') {
    const question = questions[currentQuestion];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className={cn(
          "w-full max-w-2xl transition-all duration-300",
          isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
        )}>
          {/* Progress Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Atom className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-400 text-sm">问题 {currentQuestion + 1} / {questions.length}</span>
              </div>
              <span className="text-cyan-400 text-sm font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-slate-700" />
          </div>

          {/* Question Card */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-2xl">
            <CardContent className="p-6 md:p-8">
              {/* Question */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
                {question.text}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    variant="outline"
                    className="w-full justify-start text-left p-5 h-auto border-slate-600 hover:border-cyan-500 hover:bg-cyan-500/10 text-slate-200 hover:text-white transition-all duration-200 group"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 group-hover:bg-cyan-500/30 flex items-center justify-center mr-4 text-sm font-medium transition-colors">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-base leading-relaxed">{option.text}</span>
                    <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Question Counter */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index < currentQuestion ? "bg-cyan-500 w-4" :
                    index === currentQuestion ? "bg-cyan-400" : "bg-slate-700"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Result View
  const personality = getPersonalityType();
  const percentages = getDimensionPercentages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className={cn(
        "max-w-4xl mx-auto transition-all duration-500",
        isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
      )}>
        {/* Result Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            测试结果
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {personality.emoji} {personality.name}
          </h1>
          <p className="text-cyan-400 text-lg">{personality.title}</p>
        </div>

        {/* Main Result Card */}
        <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-2xl mb-6">
          <CardContent className="p-6 md:p-8">
            {/* Description */}
            <p className="text-xl text-slate-200 text-center mb-8 leading-relaxed">
              {personality.description}
            </p>

            <Separator className="bg-slate-700 mb-8" />

            {/* Dimension Scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Dimension 1: I vs D */}
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-300 text-sm">思维方式</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className={cn("font-medium", percentages.I >= 50 ? "text-cyan-400" : "text-slate-500")}>
                        直觉派 {percentages.I}%
                      </span>
                      <span className={cn("font-medium", percentages.D >= 50 ? "text-cyan-400" : "text-slate-500")}>
                        推导派 {percentages.D}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-cyan-500 transition-all duration-1000"
                        style={{ width: `${percentages.I}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimension 2: T vs E */}
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300 text-sm">研究取向</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className={cn("font-medium", percentages.T >= 50 ? "text-cyan-400" : "text-slate-500")}>
                        理论家 {percentages.T}%
                      </span>
                      <span className={cn("font-medium", percentages.E >= 50 ? "text-cyan-400" : "text-slate-500")}>
                        实验家 {percentages.E}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-green-500 transition-all duration-1000"
                        style={{ width: `${percentages.T}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimension 3: M vs C */}
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Orbit className="w-4 h-4 text-pink-400" />
                    <span className="text-slate-300 text-sm">关注尺度</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className={cn("font-medium", percentages.M >= 50 ? "text-cyan-400" : "text-slate-500")}>
                        微观视角 {percentages.M}%
                      </span>
                      <span className={cn("font-medium", percentages.C >= 50 ? "text-cyan-400" : "text-slate-500")}>
                        宏观视角 {percentages.C}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 transition-all duration-1000"
                        style={{ width: `${percentages.M}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimension 4: N vs R */}
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-orange-400" />
                    <span className="text-slate-300 text-sm">解题策略</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className={cn("font-medium", percentages.N >= 50 ? "text-cyan-400" : "text-slate-500")}>
                        创新者 {percentages.N}%
                      </span>
                      <span className={cn("font-medium", percentages.R >= 50 ? "text-cyan-400" : "text-slate-500")}>
                        严谨者 {percentages.R}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-1000"
                        style={{ width: `${percentages.N}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis */}
        <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-2xl mb-6">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              详细分析
            </h3>
            <ScrollArea className="h-auto max-h-[600px]">
              <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                {personality.detailedAnalysis}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Traits & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Traits */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                核心特质
              </h3>
              <div className="flex flex-wrap gap-2">
                {personality.traits.map((trait, index) => (
                  <Badge key={index} variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                    {trait}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-400" />
                优势
              </h3>
              <ul className="space-y-2">
                {personality.strengths.map((strength, index) => (
                  <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Weaknesses */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-400" />
                待改进
              </h3>
              <ul className="space-y-2">
                {personality.weaknesses.map((weakness, index) => (
                  <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-red-400 mt-1">○</span>
                    {weakness}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Suitable Fields */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-400" />
                适合领域
              </h3>
              <div className="flex flex-wrap gap-2">
                {personality.suitableFields.map((field, index) => (
                  <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-300">
                    {field}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Famous Physicists */}
        <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-xl mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-amber-400" />
              相似物理学家
            </h3>
            <div className="flex flex-wrap gap-3">
              {personality.famousPhysicists.map((physicist, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg">
                  <Atom className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">{physicist}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Advice */}
        <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 shadow-xl mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              发展建议
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {personality.advice}
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={restartQuiz}
            className="flex-1 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            重新测试
          </Button>
          <Button
            onClick={() => {
              const text = `我的PBTI测试结果是：${personality.emoji} ${personality.name} - ${personality.title}`;
              if (navigator.share) {
                navigator.share({
                  title: 'PBTI - 物理学家脑型指标',
                  text: text,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(text);
                alert('结果已复制到剪贴板！');
              }
            }}
            variant="outline"
            className="flex-1 py-5 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Share2 className="w-5 h-5 mr-2" />
            分享结果
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>PBTI · Physicist Brain Type Indicator</p>
          <p className="mt-1">探索你的物理学思维方式</p>
        </div>
      </div>
    </div>
  );
}

export default App;
