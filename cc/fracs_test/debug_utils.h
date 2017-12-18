/**
 * \file debug_utils.h
 * Contains debug utilities mainly for debug tracing.
 */
#ifndef MH_DEBUG_UTILS_H
#define MH_DEBUG_UTILS_H

#include <stdarg.h>

extern int gFlags_DU;					///< A binary OR of the above flags.
extern int gFlags_Normal;					///< A binary OR of the above flags.
extern int gFlags_Debug;					///< A binary OR of the above flags.

/**
 * define _DEBUG if we want MyTrace functionality
 */
#define USE_TRACE

#ifdef USE_TRACE

/**
 * Macro definition for MyTrace to be able to ignore on compiler stage
 */
#define MYTRACE MyTrace

/** MyTrace flags */
const int DBTR_RESULTS	 = 0x0001;	///< traces results
const int DBTR_CALC 	 = 0x0002;	///< traces calculations
const int DBTR_BUFFER    = 0x0004;	///< traces portion buffer
const int DBTR_STATE	 = 0x0008;	///< traces calculation state
const int DBTR_PROCESS   = 0x0010;  ///< trace calc_process
const int DBTR_ARCHIVER  = 0x0020;  ///< trace archiver operations
const int DBTR_START     = 0x0040;  ///< trace start manager operation
const int DBTR_ARGS      = 0x0080;  ///< trace program arguments
const int DBTR_ERROR     = 0x0100;  ///< error
const int DBTR_TEST      = 0x0200;  ///< short term tests
const int DBTR_RELAY_CLIENT = 0x0400;  ///< short term tests
const int DBTR_IMPORTANT =    0x0800;  ///< important to observer run of program

const int TR_LOGGING_BIT = 0x40000000; ///< bit to log this trace message
const int TR_ERROR_BIT   = DBTR_ERROR; ///< bit to show that this is error message

const int DBTR_START_L     = DBTR_START | TR_LOGGING_BIT; ///< START message + logging
const int DBTR_IMPORTANT_L = DBTR_IMPORTANT | TR_LOGGING_BIT; ///< important message + logging
const int DBTR_ERROR_L = DBTR_ERROR | TR_LOGGING_BIT;  ///< important error message to log

#endif

/**
 * Conditional trace function.
 * \param[in] flags Flag associated with this trace.
 * \param[in] level associated with this trace.
 * \param[in] *fmt String to output to the debugger.  Will be formatted like scanf.
 * \param[in] ... Additional variables.
 */
void MyTrace(int flags, int level, const char *fmt, ...);

/**
 * Conditional trace function.
 * \param[in] flags Flag associated with this trace.
 * \param[in] *fmt String to output to the debugger.  Will be formatted like scanf.
 * \param[in] ... Additional variables.
 */
void MyTrace(int flags, const char *fmt, ...);
/**
 * set trace level for flag to new value
 * \param flag - flag for which we set level
 * \param newLevel - new value of level
 */
void SetTraceLevel(int flag, int newLevel);

/**
 * Check if we need to trace for this values of flag and level.
 */
bool CheckIfTrace(int flags, int lev);

extern const char *logFileName;

void IntToStrTime(clmStr &stime, time_t time); ///< convert time sec from 1970 to 2011.04.15_14:45 format

#endif // MH_DEBUG_UTILS_H
