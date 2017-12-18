#lang racket

(define (mfact n) 
  (cond ((< n 2) 1)
        (true (* n (mfact (- n 1))))))

(define (greet name)
  (string-append "Misha " ", " name))
