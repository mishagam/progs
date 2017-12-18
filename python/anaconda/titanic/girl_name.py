def girl_name(s):
    ss = s.split(' ')
    for w in ss:
        if w.startswith('('):
            return w[1:]
    return ss[2]
        