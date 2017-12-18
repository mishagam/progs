/**
 * \file str_buf.h
 * author Misha
 */
#ifndef STR_BUF_H
#define STR_BUF_H

#include <stdlib.h>
#include <string.h>
#include <strtoolm.h>

/**
 * Буфферная структура для работы с
 * эффективным распределением большого количества строк в памяти.
 */
class StrBuf {
	char *mem;   ///< указатель на буфер памяти для строк
	char *pm;    ///< указатель на текущую строку или свободное место.
	int size;    ///<  размер буфера

public:
	/**
	 * Конструктор.
	 * Инициализировать буфер с данным размером.
	 */
	StrBuf(int size) {
		mem = pm = (char *)malloc(size);
		this->size = size;
	}
	/**
	 * деструктор - освобождает буфер.
	 */
	~StrBuf() {
		free(mem);
	}
	/**
	 * переводит текущий указатель на начало буфера
	 */
	void reset() {
		pm = mem;
	}
	/**
	 * добавить строку в буфер
	 */
	int add(const char *s) {
		if ((pm - mem) + strlen(s) < size) {
			strcpy(pm, s);
			pm += strlen(s);
			return 1;
		} else {
			// expanding string memory if required
			int new_size = size*2;
			char *new_mem = (char *)malloc(new_size);
			if (new_mem==NULL) {
				return 0;
			}
			strcpy(new_mem, mem);
			strcat(new_mem, s);
			free(mem);
			mem = new_mem;
			pm = new_mem + strlen(mem);
			size = new_size;
			// printf("Doubled StrBuf size to %d\n", size);
			return 1;
		}
	}
	/**
	 * добавить clmStr строку в буфер
	 */
	int add(clmStr &cs) {
		return add(cs.c_str());
	}
	/**
	 * добавить массив строк в буфер
	 */
	int addArray(float *a, int len) {
		char buf[30];
		for (int i=0; i<len; i++) {
			sprintf(buf, "%f", a[i]);
			add(buf);
			if (i < len-1) {
				add(", ");
			}
		}
		return 1;
	}
	/**
	 * получить адрес буфера
	 */
	char *getBuf() {
		return mem;
	}
};

#endif // STR_BUF_H
