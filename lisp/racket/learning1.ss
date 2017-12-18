#lang scheme
(define (cm->inch x) (* x 2.54))
(define PI 3.14159)
(define (condval n)
  (cond
    [(< n 10) 5.0]
    [(< n 20) 5]
    [(< n 30) true]))
(define (fact n)
  (cond [(< n 2) 1]
        [#t (* n (fact (- n 1)))]))
(define (concat l) 
  (string-join l " "))
(concat '("aaaaaaaaaaaaaaaaaa" "asdkasld_rttrtrtr_ssdsdsdsdds"))


