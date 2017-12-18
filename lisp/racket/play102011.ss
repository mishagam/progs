#lang scheme
(define (msum a b) (+ a b))

(define (mfact n)
  (if (< n 2) 1
      (* n (mfact (- n 1)))))

(define (fsum n)
  (ifsum n 1))
(define (ifsum n sret)
  (if (< n 1) sret
      (ifsum (- n 1) (+ n sret)))) 
(define (mfib n)
  (if (< n 2) 1
      (+ (mfib (- n 2)) (mfib (- n 1)))))