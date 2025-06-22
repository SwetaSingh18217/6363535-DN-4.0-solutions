using System;

namespace FinancialForecasting
{
    class Program
    {
        static void Main(string[] args)
        {
            double presentValue = 10000;  
            double annualRate = 0.05;     
            int years = 5;

            
            double futureValueRecursive = ForecastRecursive(presentValue, annualRate, years);
            Console.WriteLine($"[Recursive] Future value after {years} years: {futureValueRecursive:F2}");

            
            double futureValueIterative = ForecastIterative(presentValue, annualRate, years);
            Console.WriteLine($"[Iterative] Future value after {years} years: {futureValueIterative:F2}");
        }

        
        public static double ForecastRecursive(double presentValue, double rate, int years)
        {
            if (years == 0)
                return presentValue;

            return ForecastRecursive(presentValue, rate, years - 1) * (1 + rate);
        }

        
        public static double ForecastIterative(double presentValue, double rate, int years)
        {
            for (int i = 0; i < years; i++)
            {
                presentValue *= (1 + rate);
            }
            return presentValue;
        }
    }
}
