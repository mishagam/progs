#!/usr/bin/python

'''
problem: http://codeforces.ru/problemset/problem/201/B
@author: misha
'''
import sys

def main():
    line = sys.stdin.readline()
    ss = line.split(' ')
    n = int(ss[0])
    m = int(ss[1])
    cf00 = 0
    ci1 = 0
    ci2 = 0
    cj1=0
    cj2=0
    for i in range(n):
        s = sys.stdin.readline()
        # print 'read s:', s
        ss = s.split(' ')
        for j in range(m):
            c = int(ss[j])
            # estimate c*(jj*4 - j*4+2)**2 = 
            # c*16*jj**2 - 2*4*c*(j*4+2)*jj + c*(j*4+2)**2
            cj = j*4+2
            cf00 += c*cj*cj
            cj1 -= c*8*cj
            cj2 += c*16
            # estimate c*(ii*4 - i*4+2)**2 = 
            # c*16*ii**2 - 2*4*c*(i*4+2)*ii + c*(i*4+2)**2
            ci = i*4+2
            cf00 += c*ci*ci
            ci1 -= c*8*ci
            ci2 += c*16
             
    # now lloking for optimum ii jj - separatedly
    print 'ci coefs = ', cf00, ci1, ci2
    if (ci2 > 0):
        oii = (-ci1) /(2.0 * ci2)
        ii = int(round(oii - 0.5))
    else:
        ii = 0
    ovi = ci1*ii + ci2*ii*ii
    ii += 1
    ov1 = ci1*ii + ci2*ii*ii
    if (ov1 < ovi):
        ovi = ov1
    else:
        ii -= 1
       
    # now opt by j
    if (cj2 > 0):
        ojj = (-cj1) /(2.0 * cj2)
        jj = int(round(ojj - 0.5))
    else:
        jj = 0    
    ovj = cj1*jj + cj2*jj*jj
    jj += 1
    ov1 = cj1*jj + cj2*jj*jj
    if (ov1 < ovj):
        ovj = ov1
    else:
        jj -= 1
    
    ov = cf00 + ovi + ovj
    print ov
    print ii, jj   

if __name__ == '__main__':
    main()