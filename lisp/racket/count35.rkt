#lang racket

(define (countr d i s m)
  (if (>= i m) s
      (let ((ss (if (= (remainder i d) 0) (+ s i)
                   s)))
        (countr d (+ i 1) ss m))))

(define (count35 m)
  (let ((s3 (countr 3 1 0 m))
        (s5 (countr 5 1 0 m))
        (s15 (countr 15 1 0 m)))
    (- (+ s3 s5) s15)))

