PROGRAM test_getenv
    CHARACTER*255 homedir, hd
    CALL get_environment_variable("HOME", homedir)
    hd = trim(homedir) // '/temp/AAAA.DAT'
    print *, '|' // trim(hd) // '|'
END PROGRAM
