#include <iostream>
#include <iomanip>
#include <limits>

using namespace std;

int main() {
    int i = 4;
    double d = 4.0;
    string s = "HackerRank ";
    int two;
    double three;
    char four[100];
// Read and save an integer, double, and String to your variables.
   cin>>two>>three;
  // fgets(four,100,stdin);
   //scanf("%[^\n]s",four);
   gets(four);gets(four);
    // Print the sum of both integer variables on a new line.
   cout<<i+two<<"\n";
  

    
    // Print the sum of the double variables on a new line.
    printf("%.1f\n",three+d);
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    cout<<s<<four;

    return 0;
}