/*
 * for_cpp.h
 *
 *  Created on: Nov 8, 2014
 *      Author: misha
 */

#ifndef FOR_CPP_H_
#define FOR_CPP_H_

extern "C" {

void fortproc_(void);
void cproc_(const char *a, const char *b, int *iarg, int la, int lb);

}

#endif /* FOR_CPP_H_ */
