#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n;
    cin >> n;

    vector<long long> prefix(n + 1, 0);
    for (int i = 1; i <= n; i++)
    {
        long long value;
        cin >> value;
        prefix[i] = prefix[i - 1];

        if (i % 2 == 0)
        {
            prefix[i] += value;
        }
    }

    int q;
    cin >> q;

    while (q--)
    {
        int l, r;
        cin >> l >> r;
        cout << prefix[r] - prefix[l - 1] << '\n';
    }

    return 0;
}