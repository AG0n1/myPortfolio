import numpy as np

def solve_kramer(A, B):
    n = len(B)
    X = np.zeros(n)

    # Вычисление определителя матрицы коэффициентов
    det_A = np.linalg.det(A)

    # Решение системы методом Крамера
    for i in range(n):
        # Создание копии матрицы коэффициентов для каждого столбца
        A_i = A.copy()
        A_i[:, i] = B

        # Вычисление определителя для каждой модифицированной матрицы
        det_A_i = np.linalg.det(A_i)

        # Решение для каждой переменной
        X[i] = det_A_i / det_A

    return X

# Исходная система уравнений
A = np.array([[1, 1, 1, -2],
              [2, -1, -9, 4],
              [3, 2, -1, 5],
              [11, 1, 6, 15]], dtype=float)

B = np.array([3, 6, 1, -9], dtype=float)

# Решение системы методом Крамера
solution = solve_kramer(A, B)

# Вывод решения
print("Решение системы уравнений методом Крамера:", *solution, sep=', ')

