using System;

class Program
{
    static void Main(string[] args)
    {
 
        Logger logger1 = Logger.GetInstance();
        logger1.Log("This is the first log message.");

    
        Logger logger2 = Logger.GetInstance();
        logger2.Log("This is the second log message.");

       
        if (logger1 == logger2)
        {
            Console.WriteLine("logger1 and logger2 are the same instance.");
        }
        else
        {
            Console.WriteLine("logger1 and logger2 are different instances.");
        }
    }
}

