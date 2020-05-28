# Haversine

A formula de Haversine calcula a menor distância entre dois pontos em uma esfera, usando a latitude e a longitude dos mesmos.

### A formula é dada por:

* `a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)`
* `c = 2 ⋅ atan2( √a, √(1−a) )`
* `d = R ⋅ c`

![haversine](https://user-images.githubusercontent.com/48635609/83162364-0aa62300-a0e0-11ea-9885-83ba1da1e4a5.png)

onde φ1,φ2 é a latitude dos pontos e λ1,λ2 a longitude dos pontos.
O resultado do cálculo é aproximado pois assumimos que a terra é uma esfera perfeita onde na verdade é uma esfera oblata.
