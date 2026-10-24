#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n;
    cin >> n;

    vector<int> A(n);
    for (int i = 0; i < n; i++)
    {

        cin>>A[i];
    }

    vector<int> P(n);
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum +=A[i];
        P[i]=sum;
    }

    int q;
    cin >> q;

    for (int i = 0; i < q; i++)
    {
        int l,r;
        cin >>l >>r;

        l--;
        r--;

        if (l==0)
        {
            cout << P[r] << endl;
        }
        else
        {
            cout << P[r] - P[l - 1] << endl;
        }
        
    }
    
    
}