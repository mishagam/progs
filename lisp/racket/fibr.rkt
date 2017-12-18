#lang racket

(define (fibr a b s m)
  (if (> b m) s
      (let ((fib (+ a b)))
        (let ((ss (if (= 0 (remainder fib 2)) (+ s fib) s)))
          (fibr b fib ss m)))))

(define (fb m)
  (fibr 1 1 0 m))

