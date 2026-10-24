import java.util.Scanner;

public class RangeSumQuery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int[] prefixSum = new int[n + 1];

        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + scanner.nextInt();
        }

        int q = scanner.nextInt();

        for (int i = 0; i < q; i++) {
            int left = scanner.nextInt();
            int right = scanner.nextInt();

            int sum = prefixSum[right] - prefixSum[left - 1];
            System.out.println(sum);
        }

        scanner.close();
    }
}
