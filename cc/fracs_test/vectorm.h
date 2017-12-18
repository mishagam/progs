/**
 * \file vectorm.h
 * Vector like collection without STL.
 */
#ifndef MH_VECTORM_H
#define MH_VECTORM_H

#include "debug_utils.h"

const int VECT_SIZE = 200;  ///< default initial vector size

/**
 * \brief My implementation of vector.
 *
 * I have done it because intel compiler doesn't like STL vector.
 */
template<typename T>
class vectorm {
    T *pt;     ///< pointer to array of vector elements
    int _size;  ///< vector size
    int allocated;  ///< allocated size

    /**
     * allocate double elements at pt and increase allocated field
     */
    void allocate_more() {
        int all2 = 2*allocated;
        T *pt2 = new T[all2];
        for (int i=0; i<_size; i++) {
            pt2[i] = pt[i];
        }
        delete []pt;
        pt = pt2;
        allocated = all2;
        // _size remains the same
    }

    /**
     * allocate new vector with initial size na.
     */
    void init(int na) {
        pt = new T[na];
        _size = 0;
        allocated = na;
    }
public:
    /**
     * constructor allocating vector with default initial size VECT_SIZE
     */
    vectorm(int na = VECT_SIZE) {
        init(na);
    }

    /**
     * destructor, frees pt array
     */
    virtual ~vectorm() {
        delete []pt;
    }

    /**
     * Adds additional element to vector.
     * Adds to the end of vector. Increases vector size if required.
     * \param t - reference to new element to add
     */
    void push_back(T &t) { 
        if (_size >= allocated) {
            allocate_more();
        }
        pt[_size++] = t;        
    }

    /**
     * Adds additional element from vector b to vector.
     * Adds to the end of vector. Increases vector size if required.
     * \param t - reference to new element to add
     */
    void push_back_all(vectorm<T> &b) {
        while (_size+b.size() >= allocated) {
            allocate_more();
        }
        for (int i=0; i<b.size(); i++) {
        	pt[_size++] = b[i];
        }
    }

    /**
     * Inserts element to vector in given position.
     * Increases vector size if required.
     *
     * \param pos - place where to add element. 0 - add in the beginning of vector.
     * \param t - reference to new element to add
     */
    void insert(int pos, T &t) {
        if (_size >= allocated) {
            allocate_more();
        }
        if (pos<0 || pos>_size) {
        	return;
        }
        for (int i=_size; i>pos; i--) {
        	pt[i] = pt[i-1];
        }
        pt[pos] = t;
        _size++;
    }

    /**
     * Adds additional element to vector.
     *
     * Adds to the end of vector. Increases vector size if required.
     *
     * \param t - value of new element to add
     */

    void push_backv(T t) {
        if (_size >= allocated) {
            allocate_more();
        }
        pt[_size++] = t;
    }

    /**
     * get refernce to n th elemty of vector.
     * \param _n - index in vector
     * \return - reference to n-th element
     */
    T& operator[](int _n) {
    	if (_n <0 || _size <= _n) {
    		MyTrace(DBTR_ERROR, "vectorm [] failed, bad index _n = %d, _size = %d",
    				_n, _size);
    		// return NULL;
    	}
    	return *(this->pt+_n);
    }

    /**
     * get address of n-th element in vector.
     * \param _n - index in vector
     * \return - pointer to n-th element in vector
     */
    T* get_item_addr(int _n) {
    	if (_n <0 || _size <= _n) {
    		MyTrace(DBTR_ERROR, "get_item_addr() failed, bad index _n = %d, _size = %d",
    				_n, _size);
    		return NULL;
    	}
    	return (this->pt + _n);
    }

    /**
     * clear vector.
     */
    void clear() { _size=0; }

    /**
     * return vector size
     */
    int size() { return this->_size; }
    /**
     * return index of first elent in vector ( 0 )
     */
    int begin() { return 0; }
    /**
     * return index of last element in vector + 1
     */
    int end() { return _size; }
    
    /**
     * sort vector using quick sort algorithm.
     * \param beg - first index of area to sort
     * \param end - last index of area to sort
     * \param cmp - compare function to use
     */
    void sort(int beg, int end, int (cmp)(T &a, T &b)) {
        int b=beg, e=end;
        if (e-b <= 1) {
            return;
        }
        int compb = 1;
        // dividing
        while (b < e-1) {
            if (compb) {
                if (cmp(pt[b], pt[e-1]) <0) {
                    e--;
                } else {
                    T t=pt[e-1]; pt[e-1]=pt[b]; pt[b]=t;
                    b++;
                    compb = !compb;
                } 
            } else {
                if (cmp(pt[b], pt[e-1]) <0) {
                    b++;
                } else {
                    T t=pt[e-1]; pt[e-1]=pt[b]; pt[b]=t;
                    e--;
                    compb = !compb;
                } 
            }
        }
        sort(beg, b, cmp);
        sort(e, end, cmp);
    }

    /**
     * binary search for value == keyVal.
     * We assume vector values are sorted.
     * \param keyVal - value to search for
     * \param keyFun - function returning key values for points in vector
     * \return - index of found element, or -1 if not found.
     */
    int binary_search(int keyVal, int (keyFun)(T &a)) {
    	int idx = -1;
        int b=0, e=size()-1;
        while (e-b >= 0) {
            int i = (b+e)/2;
            int val = keyFun(pt[i]);
            if (val == keyVal) {
                idx = i;
                break;
            } else if (val > keyVal) {
                e = i-1;
            } else {
                b = i+1;
            }
        }
        return idx;
    }
};

#endif
