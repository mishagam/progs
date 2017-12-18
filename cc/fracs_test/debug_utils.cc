/**
 * \file debug_utils.cc
 * Utilities working with trace framework - implementation of MyTrace.
 * author Misha
 */
#include <stdio.h>
#include <stdarg.h>
#include <time.h>

// #include "fracs_io.h"
#include "strtoolm.h"
#include "debug_utils.h"
// #include "fracs_utils.h"

/**
 * trace flags for normal program execution
 */
int gFlags_Normal = DBTR_ERROR | DBTR_IMPORTANT | DBTR_ARGS;
/**
 * trace flags for debug program execution
 */
int gFlags_Debug = gFlags_Normal | DBTR_ARGS | DBTR_RESULTS | DBTR_PROCESS | DBTR_START |
		DBTR_CALC | DBTR_TEST | DBTR_STATE | DBTR_BUFFER |  DBTR_ARCHIVER |
		DBTR_RELAY_CLIENT | DBTR_ERROR;
/**
 * current actual trace flags
 */
int gFlags_DU = gFlags_Debug;

const int STAND_LEVEL = 9;      ///< default level, messages with level less that this are not printed
const int MAXTRACESTRLEN = 2050;  ///< maximum length of trace message
static char traceBuf[MAXTRACESTRLEN + 8]; ///< string buffer holding trace message
const char *logFileName = NULL;  ///< file name of log file
bool PRINT_WITH_TIME = true;

/**
 * struct holding data about one kind of trace that can be independently controled.
 */
struct TraceStruct {
	int mask;  ///< trace mask to recognize if test message belong to this kind
	int level; ///< level below which trace is not printed
};

/**
 * log message to log file.
 */
void LogToFile(int flags);

/**
 * code of flag ignoring logging bit
 */
int DbtrCode(int flag) {
	int code = (~(TR_LOGGING_BIT)) & flag;
	return code;
}

/**
 * get trace source as string.
 * \param flags - flags with integer encoded trace source
 * \return - trace source as C string
 */
const char * GetTraceSource(int flags) {
	flags = DbtrCode(flags);
    if      (flags == DBTR_RESULTS  ) return "results";
    else if (flags == DBTR_CALC     ) return "calcm";
    else if (flags == DBTR_BUFFER   ) return "pbuffer";
    else if (flags == DBTR_STATE    ) return "calcstate";
    else if (flags == DBTR_PROCESS  ) return "calcproc";
    else if (flags == DBTR_ARCHIVER ) return "archiver";
    else if (flags == DBTR_START    ) return "startm";
    else if (flags == DBTR_ARGS     ) return "arguments";
    else if (flags == DBTR_ERROR    ) return "error";
    else if (flags == DBTR_TEST     ) return "test";
    else if (flags == DBTR_RELAY_CLIENT ) return "relay";
    else if (flags == DBTR_IMPORTANT) return "!";
    else return "other";
}

/**
 * table of trace sources and their default levels
 */
struct TraceStruct tra[] = {
	{DBTR_RESULTS,  STAND_LEVEL},
	{DBTR_CALC,     STAND_LEVEL},
	{DBTR_BUFFER,   STAND_LEVEL},
	{DBTR_STATE,    STAND_LEVEL},
	{DBTR_PROCESS,  STAND_LEVEL},
	{DBTR_ARCHIVER, STAND_LEVEL},
	{DBTR_START,    STAND_LEVEL},
	{DBTR_ARGS,     STAND_LEVEL},
	{DBTR_ERROR,    STAND_LEVEL},
	{DBTR_TEST,     STAND_LEVEL},
	{DBTR_RELAY_CLIENT, STAND_LEVEL},
	{DBTR_IMPORTANT,    STAND_LEVEL},
	{0, 0}
};

void SetTraceLevel(int flag, int newLevel) {
	struct TraceStruct *pt = tra;
	for (; pt->mask != 0; pt++) {
		if (flag == pt->mask) {
			pt->level = newLevel;
			break;
		}
	}
}

bool CheckIfTrace(int flags, int lev) {
	bool bret = false;
	struct TraceStruct *pt = tra;
	for (; pt->mask != 0; pt++) {
		if ((flags & pt->mask) != 0 && lev <= pt->level) {
			bret = true;
			break;
		}
	}
	if (flags==DBTR_TEST) { //  && !fracs_state.Verbose) {
		return 0;
	}
	// printf("CheckIfTrace(%d (%s) %d) returned %d", flags, GetTraceSource(flags), lev, bret);
	return bret;
}

/**
 * Trace message with formatting like in printf.
 * \param flags - tracing flags
 * \param level - tracing level
 * \param fmt - format string to use
 * \param L - list with variable number of parameters
 */
void MyTraceInternal(int flags, int level, const char *fmt, va_list L)
{
	if (!CheckIfTrace(flags, level)) {
		return;
	}
    vsnprintf(traceBuf, MAXTRACESTRLEN, fmt, L);
    traceBuf[MAXTRACESTRLEN-1] = 0;
    int trLen = strlen(traceBuf);
    if (traceBuf[trLen-1] != '\n') {
        strcat(traceBuf, "\n");
    }
    if (PRINT_WITH_TIME) {
    	time_t tim = time(NULL);
    	clmStr timeStr;
    	IntToStrTime(timeStr, tim);
        printf("[%s] %s: %s", timeStr.c_str(), GetTraceSource(flags), traceBuf);
        fflush(stdout);
    } else {
        printf("%s: %s", GetTraceSource(flags), traceBuf);
    }
    if (((flags & TR_LOGGING_BIT) != 0) &&	(logFileName != NULL)){
    	LogToFile(flags);
    }
}

/**
 * Log message to log file.
 * logging with source derived from flags and current time.
 * \param flags - trace flags
 */
void LogToFile(int flags) {
	time_t tim = time(NULL);
	clmStr timeStr;

	IntToStrTime(timeStr, tim);
	FILE *log = fopen(logFileName, "a");
	if (log == NULL) {
		printf("Error: *** cannot open log file: %s\n", logFileName);
		return;
	}
	fprintf(log, "%s: [%s] %s", GetTraceSource(flags), timeStr.c_str(), traceBuf);
	fclose(log);
}

void MyTrace(int flags, int level, const char *fmt, ...)
{
#ifdef USE_TRACE
    if ((flags & gFlags_DU)) { // && fracs_state.Verbose && )
        va_list L;
        va_start(L, fmt);
        MyTraceInternal(flags, level, fmt, L);
        va_end(L);
    }
#endif
}
void MyTrace(int flags, const char *fmt, ...) {
#ifdef USE_TRACE
    if ((flags & gFlags_DU)) { // && fracs_state.Verbose && ) 
        va_list L;
        va_start(L, fmt);
        MyTraceInternal(flags, 5, fmt, L);
        va_end(L);
    }
#endif
}


/**
 * Convert time sec from 1970 to 2011.04.15_14:45 format.
 * We are working with UTC time.
 *
 * \param stime clmStr where we put formatted time string
 * \param time - time_t time moment in sec since 1970
 */
void IntToStrTime(clmStr &stime, time_t time)
{
    struct tm tmv;
    char buf[250];
    memset(&tmv, 0, sizeof(tmv));
#ifndef OS_WINDOWS
	localtime_r(&time, &tmv);
#else
	struct tm *ptm = localtime(&time);
	memcpy(&tmv, ptm, sizeof(tmv));
#endif
    if (tmv.tm_isdst) {
    	time -= 3600;
#ifndef OS_WINDOWS
		localtime_r(&time, &tmv);
#else
		struct tm *ptm = localtime(&time);
		memcpy(&tmv, ptm, sizeof(tmv));
#endif
    }
    // localtime_r(&time, &tmv);
    stime.Rewrite("%4d.%02d.%02d_%02d_%02d_%02d", (1900 + tmv.tm_year),
            (tmv.tm_mon + 1), tmv.tm_mday, tmv.tm_hour, tmv.tm_min, tmv.tm_sec);
}

