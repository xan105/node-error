/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

export const NTSTATUS = {
  0: [
    "The caller specified WaitAny for WaitType and one of the dispatcher objects in the Object array has been set to the signaled state.",
    "STATUS_WAIT_0"
  ],
	1: [
    "The caller specified WaitAny for WaitType and one of the dispatcher objects in the Object array has been set to the signaled state.",
    "STATUS_WAIT_1"
  ],
	2: [
    "The caller specified WaitAny for WaitType and one of the dispatcher objects in the Object array has been set to the signaled state.",
    "STATUS_WAIT_2"
  ],
	3: [
    "The caller specified WaitAny for WaitType and one of the dispatcher objects in the Object array has been set to the signaled state.",
    "STATUS_WAIT_3"
  ],
	63: [
    "The caller specified WaitAny for WaitType and one of the dispatcher objects in the Object array has been set to the signaled state.",
    "STATUS_WAIT_63"
  ],
	128: [
    "The caller attempted to wait for a mutex that has been abandoned.",
    "STATUS_ABANDONED_WAIT_0"
  ],
	191: [
    "The caller attempted to wait for a mutex that has been abandoned.",
    "STATUS_ABANDONED_WAIT_63"
  ],
	192: [
    "A user-mode APC was delivered before the given Interval expired.",
    "STATUS_USER_APC"
  ],
	257: [
    "The delay completed because the thread was alerted.",
    "STATUS_ALERTED"
  ],
	258: [
    "The given Timeout interval expired.",
    "STATUS_TIMEOUT"
  ],
	259: [
    "The operation that was requested is pending completion.",
    "STATUS_PENDING"
  ],
	260: [
    "A reparse should be performed by the Object Manager because the name of the file resulted in a symbolic link.",
    "STATUS_REPARSE"
  ],
	261: [
    "Returned by enumeration APIs to indicate more information is available to successive calls.",
    "STATUS_MORE_ENTRIES"
  ],
	262: [
    "Indicates not all privileges or groups that are referenced are assigned to the caller. This allows, for example, all privileges to be disabled without having to know exactly which privileges are assigned.",
    "STATUS_NOT_ALL_ASSIGNED"
  ],
	263: [
    "Some of the information to be translated has not been translated.",
    "STATUS_SOME_NOT_MAPPED"
  ],
	264: [
    "An open/create operation completed while an opportunistic lock (oplock) break is underway.",
    "STATUS_OPLOCK_BREAK_IN_PROGRESS"
  ],
	265: [
    "A new volume has been mounted by a file system.",
    "STATUS_VOLUME_MOUNTED"
  ],
	266: [
    "This success level status indicates that the transaction state already exists for the registry subtree but that a transaction commit was previously aborted. The commit has now been completed.",
    "STATUS_RXACT_COMMITTED"
  ],
	267: [
    "Indicates that a notify change request has been completed due to closing the handle that made the notify change request.",
    "STATUS_NOTIFY_CLEANUP"
  ],
	268: [
    "Indicates that a notify change request is being completed and that the information is not being returned in the caller's buffer. The caller now needs to enumerate the files to find the changes.",
    "STATUS_NOTIFY_ENUM_DIR"
  ],
	269: [
    "{No Quotas} No system quota limits are specifically set for this account.",
    "STATUS_NO_QUOTAS_FOR_ACCOUNT"
  ],
	270: [
    "{Connect Failure on Primary Transport} An attempt was made to connect to the remote server on the primary transport, but the connection failed. The computer WAS able to connect on a secondary transport.",
    "STATUS_PRIMARY_TRANSPORT_CONNECT_FAILED"
  ],
	272: [
    "The page fault was a transition fault.",
    "STATUS_PAGE_FAULT_TRANSITION"
  ],
	273: [
    "The page fault was a demand zero fault.",
    "STATUS_PAGE_FAULT_DEMAND_ZERO"
  ],
	274: [
    "The page fault was a demand zero fault.",
    "STATUS_PAGE_FAULT_COPY_ON_WRITE"
  ],
	275: [
    "The page fault was a demand zero fault.",
    "STATUS_PAGE_FAULT_GUARD_PAGE"
  ],
	276: [
    "The page fault was satisfied by reading from a secondary storage device.",
    "STATUS_PAGE_FAULT_PAGING_FILE"
  ],
	277: [
    "The cached page was locked during operation.",
    "STATUS_CACHE_PAGE_LOCKED"
  ],
	278: [
    "The crash dump exists in a paging file.",
    "STATUS_CRASH_DUMP"
  ],
	279: [
    "The specified buffer contains all zeros.",
    "STATUS_BUFFER_ALL_ZEROS"
  ],
	280: [
    "A reparse should be performed by the Object Manager because the name of the file resulted in a symbolic link.",
    "STATUS_REPARSE_OBJECT"
  ],
	281: [
    "The device has succeeded a query-stop and its resource requirements have changed.",
    "STATUS_RESOURCE_REQUIREMENTS_CHANGED"
  ],
	288: [
    "The translator has translated these resources into the global space and no additional translations should be performed.",
    "STATUS_TRANSLATION_COMPLETE"
  ],
	289: [
    "The directory service evaluated group memberships locally, because it was unable to contact a global catalog server.",
    "STATUS_DS_MEMBERSHIP_EVALUATED_LOCALLY"
  ],
	290: [
    "A process being terminated has no threads to terminate.",
    "STATUS_NOTHING_TO_TERMINATE"
  ],
	291: [
    "The specified process is not part of a job.",
    "STATUS_PROCESS_NOT_IN_JOB"
  ],
	292: [
    "The specified process is part of a job.",
    "STATUS_PROCESS_IN_JOB"
  ],
	293: [
    "{Volume Shadow Copy Service} The system is now ready for hibernation.",
    "STATUS_VOLSNAP_HIBERNATE_READY"
  ],
	294: [
    "A file system or file system filter driver has successfully completed an FsFilter operation.",
    "STATUS_FSFILTER_OP_COMPLETED_SUCCESSFULLY"
  ],
	295: [
    "The specified interrupt vector was already connected.",
    "STATUS_INTERRUPT_VECTOR_ALREADY_CONNECTED"
  ],
	296: [
    "The specified interrupt vector is still connected.",
    "STATUS_INTERRUPT_STILL_CONNECTED"
  ],
	297: [
    "The current process is a cloned process.",
    "STATUS_PROCESS_CLONED"
  ],
	298: [
    "The file was locked and all users of the file can only read.",
    "STATUS_FILE_LOCKED_WITH_ONLY_READERS"
  ],
	299: [
    "The file was locked and at least one user of the file can write.",
    "STATUS_FILE_LOCKED_WITH_WRITERS"
  ],
	514: [
    "The specified ResourceManager made no changes or updates to the resource under this transaction.",
    "STATUS_RESOURCEMANAGER_READ_ONLY"
  ],
	871: [
    "An operation is blocked and waiting for an oplock.",
    "STATUS_WAIT_FOR_OPLOCK"
  ],
	65537: [
    "Debugger handled the exception.",
    "DBG_EXCEPTION_HANDLED"
  ],
	65538: [
    "The debugger continued.",
    "DBG_CONTINUE"
  ],
	1835009: [
    "The IO was completed by a filter.",
    "STATUS_FLT_IO_COMPLETE"
  ],
	1073741824: [
    "{Object Exists} An attempt was made to create an object but the object name already exists.",
    "STATUS_OBJECT_NAME_EXISTS"
  ],
	1073741825: [
    "{Thread Suspended} A thread termination occurred while the thread was suspended. The thread resumed, and termination proceeded.",
    "STATUS_THREAD_WAS_SUSPENDED"
  ],
	1073741826: [
    "{Working Set Range Error} An attempt was made to set the working set minimum or maximum to values that are outside the allowable range.",
    "STATUS_WORKING_SET_LIMIT_RANGE"
  ],
	1073741827: [
    "{Image Relocated} An image file could not be mapped at the address that is specified in the image file. Local fixes must be performed on this image.",
    "STATUS_IMAGE_NOT_AT_BASE"
  ],
	1073741828: [
    "This informational level status indicates that a specified registry subtree transaction state did not yet exist and had to be created.",
    "STATUS_RXACT_STATE_CREATED"
  ],
	1073741829: [
    "{Segment Load} A virtual DOS machine (VDM) is loading, unloading, or moving an MS-DOS or Win16 program segment image. An exception is raised so that a debugger can load, unload, or track symbols and breakpoints within these 16-bit segments.",
    "STATUS_SEGMENT_NOTIFICATION"
  ],
	1073741830: [
    "{Local Session Key} A user session key was requested for a local remote procedure call (RPC) connection. The session key that is returned is a constant value and not unique to this connection.",
    "STATUS_LOCAL_USER_SESSION_KEY"
  ],
	1073741831: [
    "{Invalid Current Directory} The process cannot switch to the startup current directory. Select OK to set the current directory or select CANCEL to exit.",
    "STATUS_BAD_CURRENT_DIRECTORY"
  ],
	1073741832: [
    "{Serial IOCTL Complete} A serial I/O operation was completed by another write to a serial port. (The IOCTL_SERIAL_XOFF_COUNTER reached zero.)",
    "STATUS_SERIAL_MORE_WRITES"
  ],
	1073741833: [
    "{Registry Recovery} One of the files that contains the system registry data had to be recovered by using a log or alternate copy. The recovery was successful.",
    "STATUS_REGISTRY_RECOVERED"
  ],
	1073741834: [
    "{Redundant Read} To satisfy a read request, the Windows NT operating system fault-tolerant file system successfully read the requested data from a redundant copy. This was done because the file system encountered a failure on a member of the fault-tolerant volume but was unable to reassign the failing area of the device.",
    "STATUS_FT_READ_RECOVERY_FROM_BACKUP"
  ],
	1073741835: [
    "{Redundant Write} To satisfy a write request, the Windows NT fault-tolerant file system successfully wrote a redundant copy of the information. This was done because the file system encountered a failure on a member of the fault-tolerant volume but was unable to reassign the failing area of the device.",
    "STATUS_FT_WRITE_RECOVERY"
  ],
	1073741836: [
    "{Serial IOCTL Timeout} A serial I/O operation completed because the time-out period expired. (The IOCTL_SERIAL_XOFF_COUNTER had not reached zero.)",
    "STATUS_SERIAL_COUNTER_TIMEOUT"
  ],
	1073741837: [
    "{Password Too Complex} The Windows password is too complex to be converted to a LAN Manager password. The LAN Manager password that returned is a NULL string.",
    "STATUS_NULL_LM_PASSWORD"
  ],
	1073741838: [
    "{Machine Type Mismatch} The image file is valid but is for a machine type other than the current machine. Select OK to continue, or CANCEL to fail the DLL load.",
    "STATUS_IMAGE_MACHINE_TYPE_MISMATCH"
  ],
	1073741839: [
    "{Partial Data Received} The network transport returned partial data to its client. The remaining data will be sent later.",
    "STATUS_RECEIVE_PARTIAL"
  ],
	1073741840: [
    "{Expedited Data Received} The network transport returned data to its client that was marked as expedited by the remote system.",
    "STATUS_RECEIVE_EXPEDITED"
  ],
	1073741841: [
    "{Partial Expedited Data Received} The network transport returned partial data to its client and this data was marked as expedited by the remote system. The remaining data will be sent later.",
    "STATUS_RECEIVE_PARTIAL_EXPEDITED"
  ],
	1073741842: [
    "{TDI Event Done} The TDI indication has completed successfully.",
    "STATUS_EVENT_DONE"
  ],
	1073741843: [
    "{TDI Event Pending} The TDI indication has entered the pending state.",
    "STATUS_EVENT_PENDING"
  ],
	1073741844: [
    "Checking file system.",
    "STATUS_CHECKING_FILE_SYSTEM"
  ],
	1073741845: [
    "Fatal Application Exit",
    "STATUS_FATAL_APP_EXIT"
  ],
	1073741846: [
    "The specified registry key is referenced by a predefined handle.",
    "STATUS_PREDEFINED_HANDLE"
  ],
	1073741847: [
    "{Page Unlocked} The page protection of a locked page was changed to 'No Access' and the page was unlocked from memory and from the process.",
    "STATUS_WAS_UNLOCKED"
  ],
	1073741848: [
    "Service notification",
    "STATUS_SERVICE_NOTIFICATION"
  ],
	1073741849: [
    "{Page Locked} One of the pages to lock was already locked.",
    "STATUS_WAS_LOCKED"
  ],
	1073741850: [
    "Application popup",
    "STATUS_LOG_HARD_ERROR"
  ],
	1073741851: [
    "A Win32 process already exists.",
    "STATUS_ALREADY_WIN32"
  ],
	1073741852: [
    "An exception status code that is used by the Win32 x86 emulation subsystem.",
    "STATUS_WX86_UNSIMULATE"
  ],
	1073741853: [
    "An exception status code that is used by the Win32 x86 emulation subsystem.",
    "STATUS_WX86_CONTINUE"
  ],
	1073741854: [
    "An exception status code that is used by the Win32 x86 emulation subsystem.",
    "STATUS_WX86_SINGLE_STEP"
  ],
	1073741855: [
    "An exception status code that is used by the Win32 x86 emulation subsystem.",
    "STATUS_WX86_BREAKPOINT"
  ],
	1073741856: [
    "An exception status code that is used by the Win32 x86 emulation subsystem.",
    "STATUS_WX86_EXCEPTION_CONTINUE"
  ],
	1073741857: [
    "An exception status code that is used by the Win32 x86 emulation subsystem.",
    "STATUS_WX86_EXCEPTION_LASTCHANCE"
  ],
	1073741858: [
    "An exception status code that is used by the Win32 x86 emulation subsystem.",
    "STATUS_WX86_EXCEPTION_CHAIN"
  ],
	1073741859: [
    "{Machine Type Mismatch} The image file is valid but is for a machine type other than the current machine.",
    "STATUS_IMAGE_MACHINE_TYPE_MISMATCH_EXE"
  ],
	1073741860: [
    "A yield execution was performed and no thread was available to run.",
    "STATUS_NO_YIELD_PERFORMED"
  ],
	1073741861: [
    "The resume flag to a timer API was ignored.",
    "STATUS_TIMER_RESUME_IGNORED"
  ],
	1073741862: [
    "The arbiter has deferred arbitration of these resources to its parent.",
    "STATUS_ARBITRATION_UNHANDLED"
  ],
	1073741863: [
    "The device has detected a CardBus card in its slot.",
    "STATUS_CARDBUS_NOT_SUPPORTED"
  ],
	1073741864: [
    "An exception status code that is used by the Win32 x86 emulation subsystem.",
    "STATUS_WX86_CREATEWX86TIB"
  ],
	1073741865: [
    "The CPUs in this multiprocessor system are not all the same revision level. To use all processors, the operating system restricts itself to the features of the least capable processor in the system. If problems occur with this system, contact the CPU manufacturer to see if this mix of processors is supported.",
    "STATUS_MP_PROCESSOR_MISMATCH"
  ],
	1073741866: [
    "The system was put into hibernation.",
    "STATUS_HIBERNATED"
  ],
	1073741867: [
    "The system was resumed from hibernation.",
    "STATUS_RESUME_HIBERNATION"
  ],
	1073741868: [
    "Windows has detected that the system firmware (BIOS) was updated.",
    "STATUS_FIRMWARE_UPDATED"
  ],
	1073741869: [
    "A device driver is leaking locked I/O pages and is causing system degradation. The system has automatically enabled the tracking code to try and catch the culprit.",
    "STATUS_DRIVERS_LEAKING_LOCKED_PAGES"
  ],
	1073741870: [
    "The ALPC message being canceled has already been retrieved from the queue on the other side.",
    "STATUS_MESSAGE_RETRIEVED"
  ],
	1073741871: [
    "The system power state is transitioning.",
    "STATUS_SYSTEM_POWERSTATE_TRANSITION"
  ],
	1073741872: [
    "The receive operation was successful. Check the ALPC completion list for the received message.",
    "STATUS_ALPC_CHECK_COMPLETION_LIST"
  ],
	1073741873: [
    "The system power state is transitioning.",
    "STATUS_SYSTEM_POWERSTATE_COMPLEX_TRANSITION"
  ],
	1073741874: [
    "Access to is monitored by a policy rule.",
    "STATUS_ACCESS_AUDIT_BY_POLICY"
  ],
	1073741875: [
    "A valid hibernation file has been invalidated and should be abandoned.",
    "STATUS_ABANDON_HIBERFILE"
  ],
	1073741876: [
    "Business rule scripts are disabled for the calling application.",
    "STATUS_BIZRULES_NOT_ENABLED"
  ],
	1073742484: [
    "The system has awoken.",
    "STATUS_WAKE_SYSTEM"
  ],
	1073742704: [
    "The directory service is shutting down.",
    "STATUS_DS_SHUTTING_DOWN"
  ],
	1073807361: [
    "Debugger will reply later.",
    "DBG_REPLY_LATER"
  ],
	1073807362: [
    "Debugger cannot provide a handle.",
    "DBG_UNABLE_TO_PROVIDE_HANDLE"
  ],
	1073807363: [
    "Debugger terminated the thread.",
    "DBG_TERMINATE_THREAD"
  ],
	1073807364: [
    "Debugger terminated the process.",
    "DBG_TERMINATE_PROCESS"
  ],
	1073807365: [
    "Debugger obtained control of C.",
    "DBG_CONTROL_C"
  ],
	1073807366: [
    "Debugger printed an exception on control C.",
    "DBG_PRINTEXCEPTION_C"
  ],
	1073807367: [
    "Debugger received a RIP exception.",
    "DBG_RIPEXCEPTION"
  ],
	1073807368: [
    "Debugger received a control break.",
    "DBG_CONTROL_BREAK"
  ],
	1073807369: [
    "Debugger command communication exception.",
    "DBG_COMMAND_EXCEPTION"
  ],
	1073872982: [
    "A UUID that is valid only on this computer has been allocated.",
    "RPC_NT_UUID_LOCAL_ONLY"
  ],
	1073873071: [
    "Some data remains to be sent in the request buffer.",
    "RPC_NT_SEND_INCOMPLETE"
  ],
	1074397188: [
    "The Client Drive Mapping Service has connected on Terminal Connection.",
    "STATUS_CTX_CDM_CONNECT"
  ],
	1074397189: [
    "The Client Drive Mapping Service has disconnected on Terminal Connection.",
    "STATUS_CTX_CDM_DISCONNECT"
  ],
	1075118093: [
    "A kernel mode component is releasing a reference on an activation context.",
    "STATUS_SXS_RELEASE_ACTIVATION_CONTEXT"
  ],
	1075380276: [
    "The transactional resource manager is already consistent. Recovery is not needed.",
    "STATUS_RECOVERY_NOT_NEEDED"
  ],
	1075380277: [
    "The transactional resource manager has already been started.",
    "STATUS_RM_ALREADY_STARTED"
  ],
	1075445772: [
    "The log service encountered a log stream with no restart area.",
    "STATUS_LOG_NO_RESTART"
  ],
	1075511532: [
    "{Display Driver Recovered From Failure} The display driver has detected a failure and recovered from it. Some graphical operations might have failed. The next time you restart the machine, a dialog box appears, giving you an opportunity to upload data about this failure to Microsoft.",
    "STATUS_VIDEO_DRIVER_DEBUG_REPORT_REQUEST"
  ],
	1075707914: [
    "The specified buffer is not big enough to contain the entire requested dataset. Partial data is populated up to the size of the buffer.",
    "STATUS_GRAPHICS_PARTIAL_DATA_POPULATED"
  ],
	1075708183: [
    "The kernel driver detected a version mismatch between it and the user mode driver.",
    "STATUS_GRAPHICS_DRIVER_MISMATCH"
  ],
	1075708679: [
    "No mode is pinned on the specified VidPN source/target.",
    "STATUS_GRAPHICS_MODE_NOT_PINNED"
  ],
	1075708702: [
    "The specified mode set does not specify a preference for one of its modes.",
    "STATUS_GRAPHICS_NO_PREFERRED_MODE"
  ],
	1075708747: [
    "The specified dataset (for example, mode set, frequency range set, descriptor set, or topology) is empty.",
    "STATUS_GRAPHICS_DATASET_IS_EMPTY"
  ],
	1075708748: [
    "The specified dataset (for example, mode set, frequency range set, descriptor set, or topology) does not contain any more elements.",
    "STATUS_GRAPHICS_NO_MORE_ELEMENTS_IN_DATASET"
  ],
	1075708753: [
    "The specified content transformation is not pinned on the specified VidPN present path.",
    "STATUS_GRAPHICS_PATH_CONTENT_GEOMETRY_TRANSFORMATION_NOT_PINNED"
  ],
	1075708975: [
    "The child device presence was not reliably detected.",
    "STATUS_GRAPHICS_UNKNOWN_CHILD_STATUS"
  ],
	1075708983: [
    "Starting the lead adapter in a linked configuration has been temporarily deferred.",
    "STATUS_GRAPHICS_LEADLINK_START_DEFERRED"
  ],
	1075708985: [
    "The display adapter is being polled for children too frequently at the same polling level.",
    "STATUS_GRAPHICS_POLLING_TOO_FREQUENTLY"
  ],
	1075708986: [
    "Starting the adapter has been temporarily deferred.",
    "STATUS_GRAPHICS_START_DEFERRED"
  ],
	1076035585: [
    "The request will be completed later by an NDIS status indication.",
    "STATUS_NDIS_INDICATION_REQUIRED"
  ],
	2147483649: [
    "{EXCEPTION} Guard Page Exception A page of memory that marks the end of a data structure, such as a stack or an array, has been accessed.",
    "STATUS_GUARD_PAGE_VIOLATION"
  ],
	2147483650: [
    "{EXCEPTION} Alignment Fault A data type misalignment was detected in a load or store instruction.",
    "STATUS_DATATYPE_MISALIGNMENT"
  ],
	2147483651: [
    "{EXCEPTION} Breakpoint A breakpoint has been reached.",
    "STATUS_BREAKPOINT"
  ],
	2147483652: [
    "{EXCEPTION} Single Step A single step or trace operation has just been completed.",
    "STATUS_SINGLE_STEP"
  ],
	2147483653: [
    "{Buffer Overflow} The data was too large to fit into the specified buffer.",
    "STATUS_BUFFER_OVERFLOW"
  ],
	2147483654: [
    "{No More Files} No more files were found which match the file specification.",
    "STATUS_NO_MORE_FILES"
  ],
	2147483655: [
    "{Kernel Debugger Awakened} The system debugger was awakened by an interrupt.",
    "STATUS_WAKE_SYSTEM_DEBUGGER"
  ],
	2147483658: [
    "{Handles Closed} Handles to objects have been automatically closed because of the requested operation.",
    "STATUS_HANDLES_CLOSED"
  ],
	2147483659: [
    "{Non-Inheritable ACL} An access control list (ACL) contains no components that can be inherited.",
    "STATUS_NO_INHERITANCE"
  ],
	2147483660: [
    "{GUID Substitution} During the translation of a globally unique identifier (GUID) to a Windows security ID (SID), no administratively defined GUID prefix was found. A substitute prefix was used, which will not compromise system security. However, this might provide a more restrictive access than intended.",
    "STATUS_GUID_SUBSTITUTION_MADE"
  ],
	2147483661: [
    "Because of protection conflicts, not all the requested bytes could be copied.",
    "STATUS_PARTIAL_COPY"
  ],
	2147483662: [
    "{Out of Paper} The printer is out of paper.",
    "STATUS_DEVICE_PAPER_EMPTY"
  ],
	2147483663: [
    "{Device Power Is Off} The printer power has been turned off.",
    "STATUS_DEVICE_POWERED_OFF"
  ],
	2147483664: [
    "{Device Offline} The printer has been taken offline.",
    "STATUS_DEVICE_OFF_LINE"
  ],
	2147483665: [
    "{Device Busy} The device is currently busy.",
    "STATUS_DEVICE_BUSY"
  ],
	2147483666: [
    "{No More EAs} No more extended attributes (EAs) were found for the file.",
    "STATUS_NO_MORE_EAS"
  ],
	2147483667: [
    "{Illegal EA} The specified extended attribute (EA) name contains at least one illegal character.",
    "STATUS_INVALID_EA_NAME"
  ],
	2147483668: [
    "{Inconsistent EA List} The extended attribute (EA) list is inconsistent.",
    "STATUS_EA_LIST_INCONSISTENT"
  ],
	2147483669: [
    "{Invalid EA Flag} An invalid extended attribute (EA) flag was set.",
    "STATUS_INVALID_EA_FLAG"
  ],
	2147483670: [
    "{Verifying Disk} The media has changed and a verify operation is in progress; therefore, no reads or writes can be performed to the device, except those that are used in the verify operation.",
    "STATUS_VERIFY_REQUIRED"
  ],
	2147483671: [
    "{Too Much Information} The specified access control list (ACL) contained more information than was expected.",
    "STATUS_EXTRANEOUS_INFORMATION"
  ],
	2147483672: [
    "This warning level status indicates that the transaction state already exists for the registry subtree, but that a transaction commit was previously aborted. The commit has NOT been completed but has not been rolled back either; therefore, it can still be committed, if needed.",
    "STATUS_RXACT_COMMIT_NECESSARY"
  ],
	2147483674: [
    "{No More Entries} No more entries are available from an enumeration operation.",
    "STATUS_NO_MORE_ENTRIES"
  ],
	2147483675: [
    "{Filemark Found} A filemark was detected.",
    "STATUS_FILEMARK_DETECTED"
  ],
	2147483676: [
    "{Media Changed} The media has changed.",
    "STATUS_MEDIA_CHANGED"
  ],
	2147483677: [
    "{I/O Bus Reset} An I/O bus reset was detected.",
    "STATUS_BUS_RESET"
  ],
	2147483678: [
    "{End of Media} The end of the media was encountered.",
    "STATUS_END_OF_MEDIA"
  ],
	2147483679: [
    "The beginning of a tape or partition has been detected.",
    "STATUS_BEGINNING_OF_MEDIA"
  ],
	2147483680: [
    "{Media Changed} The media might have changed.",
    "STATUS_MEDIA_CHECK"
  ],
	2147483681: [
    "A tape access reached a set mark.",
    "STATUS_SETMARK_DETECTED"
  ],
	2147483682: [
    "During a tape access, the end of the data written is reached.",
    "STATUS_NO_DATA_DETECTED"
  ],
	2147483683: [
    "The redirector is in use and cannot be unloaded.",
    "STATUS_REDIRECTOR_HAS_OPEN_HANDLES"
  ],
	2147483684: [
    "The server is in use and cannot be unloaded.",
    "STATUS_SERVER_HAS_OPEN_HANDLES"
  ],
	2147483685: [
    "The specified connection has already been disconnected.",
    "STATUS_ALREADY_DISCONNECTED"
  ],
	2147483686: [
    "A long jump has been executed.",
    "STATUS_LONGJUMP"
  ],
	2147483687: [
    "A cleaner cartridge is present in the tape library.",
    "STATUS_CLEANER_CARTRIDGE_INSTALLED"
  ],
	2147483688: [
    "The Plug and Play query operation was not successful.",
    "STATUS_PLUGPLAY_QUERY_VETOED"
  ],
	2147483689: [
    "A frame consolidation has been executed.",
    "STATUS_UNWIND_CONSOLIDATE"
  ],
	2147483690: [
    "{Registry Hive Recovered} The registry hive file was corrupted and it has been recovered. Some data might have been lost.",
    "STATUS_REGISTRY_HIVE_RECOVERED"
  ],
	2147483691: [
    "The application is attempting to run executable code from the module. This might be insecure. An alternative is available. Should the application use the secure module ?",
    "STATUS_DLL_MIGHT_BE_INSECURE"
  ],
	2147483692: [
    "The application is loading executable code from the module. This is secure but might be incompatible with previous releases of the operating system. An alternative is available. Should the application use the secure module ?",
    "STATUS_DLL_MIGHT_BE_INCOMPATIBLE"
  ],
	2147483693: [
    "The create operation stopped after reaching a symbolic link.",
    "STATUS_STOPPED_ON_SYMLINK"
  ],
	2147484296: [
    "The device has indicated that cleaning is necessary.",
    "STATUS_DEVICE_REQUIRES_CLEANING"
  ],
	2147484297: [
    "The device has indicated that its door is open. Further operations require it closed and secured.",
    "STATUS_DEVICE_DOOR_OPEN"
  ],
	2147485699: [
    "Windows discovered a corruption in the file. This file has now been repaired. Check if any data in the file was lost because of the corruption.",
    "STATUS_DATA_LOST_REPAIR"
  ],
	2147549185: [
    "Debugger did not handle the exception.",
    "DBG_EXCEPTION_NOT_HANDLED"
  ],
	2148728833: [
    "The cluster node is already up.",
    "STATUS_CLUSTER_NODE_ALREADY_UP"
  ],
	2148728834: [
    "The cluster node is already down.",
    "STATUS_CLUSTER_NODE_ALREADY_DOWN"
  ],
	2148728835: [
    "The cluster network is already online.",
    "STATUS_CLUSTER_NETWORK_ALREADY_ONLINE"
  ],
	2148728836: [
    "The cluster network is already offline.",
    "STATUS_CLUSTER_NETWORK_ALREADY_OFFLINE"
  ],
	2148728837: [
    "The cluster node is already a member of the cluster.",
    "STATUS_CLUSTER_NODE_ALREADY_MEMBER"
  ],
	2149122057: [
    "The log could not be set to the requested size.",
    "STATUS_COULD_NOT_RESIZE_LOG"
  ],
	2149122089: [
    "There is no transaction metadata on the file.",
    "STATUS_NO_TXF_METADATA"
  ],
	2149122097: [
    "The file cannot be recovered because there is a handle still open on it.",
    "STATUS_CANT_RECOVER_WITH_HANDLE_OPEN"
  ],
	2149122113: [
    "Transaction metadata is already present on this file and cannot be superseded.",
    "STATUS_TXF_METADATA_ALREADY_PRESENT"
  ],
	2149122114: [
    "A transaction scope could not be entered because the scope handler has not been initialized.",
    "STATUS_TRANSACTION_SCOPE_CALLBACKS_NOT_SET"
  ],
	2149253355: [
    "{Display Driver Stopped Responding and recovered} The display driver has stopped working normally. The recovery had been performed.",
    "STATUS_VIDEO_HUNG_DISPLAY_DRIVER_THREAD_RECOVERED"
  ],
	2149318657: [
    "{Buffer too small} The buffer is too small to contain the entry. No information has been written to the buffer.",
    "STATUS_FLT_BUFFER_TOO_SMALL"
  ],
	2149646337: [
    "Volume metadata read or write is incomplete.",
    "STATUS_FVE_PARTIAL_METADATA"
  ],
	2149646338: [
    "BitLocker encryption keys were ignored because the volume was in a transient state.",
    "STATUS_FVE_TRANSIENT_STATE"
  ],
	3221225473: [
    "{Operation Failed} The requested operation was unsuccessful.",
    "STATUS_UNSUCCESSFUL"
  ],
	3221225474: [
    "{Not Implemented} The requested operation is not implemented.",
    "STATUS_NOT_IMPLEMENTED"
  ],
	3221225475: [
    "{Invalid Parameter} The specified information class is not a valid information class for the specified object.",
    "STATUS_INVALID_INFO_CLASS"
  ],
	3221225476: [
    "The specified information record length does not match the length that is required for the specified information class.",
    "STATUS_INFO_LENGTH_MISMATCH"
  ],
	3221225477: [
    "The instruction at {address} referenced memory at {address} The memory could not be {value}.",
    "STATUS_ACCESS_VIOLATION"
  ],
	3221225478: [
    "The instruction at {address}referenced memory at {address}. The required data was not placed into memory because of an I/O error status.",
    "STATUS_IN_PAGE_ERROR"
  ],
	3221225479: [
    "The page file quota for the process has been exhausted.",
    "STATUS_PAGEFILE_QUOTA"
  ],
	3221225480: [
    "An invalid HANDLE was specified.",
    "STATUS_INVALID_HANDLE"
  ],
	3221225481: [
    "An invalid initial stack was specified in a call to NtCreateThread.",
    "STATUS_BAD_INITIAL_STACK"
  ],
	3221225482: [
    "An invalid initial start address was specified in a call to NtCreateThread.",
    "STATUS_BAD_INITIAL_PC"
  ],
	3221225483: [
    "An invalid client ID was specified.",
    "STATUS_INVALID_CID"
  ],
	3221225484: [
    "An attempt was made to cancel or set a timer that has an associated APC and the specified thread is not the thread that originally set the timer with an associated APC routine.",
    "STATUS_TIMER_NOT_CANCELED"
  ],
	3221225485: [
    "An invalid parameter was passed to a service or function.",
    "STATUS_INVALID_PARAMETER"
  ],
	3221225486: [
    "A device that does not exist was specified.",
    "STATUS_NO_SUCH_DEVICE"
  ],
	3221225487: [
    "{File Not Found} The file does not exist.",
    "STATUS_NO_SUCH_FILE"
  ],
	3221225488: [
    "The specified request is not a valid operation for the target device.",
    "STATUS_INVALID_DEVICE_REQUEST"
  ],
	3221225489: [
    "The end-of-file marker has been reached. There is no valid data in the file beyond this marker.",
    "STATUS_END_OF_FILE"
  ],
	3221225490: [
    "{Wrong Volume} The wrong volume is in the drive. Insert volume into drive.",
    "STATUS_WRONG_VOLUME"
  ],
	3221225491: [
    "{No Disk} There is no disk in the drive. Insert a disk into drive.",
    "STATUS_NO_MEDIA_IN_DEVICE"
  ],
	3221225492: [
    "{Unknown Disk Format} The disk in drive is not formatted properly. Check the disk, and reformat it, if needed.",
    "STATUS_UNRECOGNIZED_MEDIA"
  ],
	3221225493: [
    "{Sector Not Found} The specified sector does not exist.",
    "STATUS_NONEXISTENT_SECTOR"
  ],
	3221225494: [
    "{Still Busy} The specified I/O request packet (IRP) cannot be disposed of because the I/O operation is not complete.",
    "STATUS_MORE_PROCESSING_REQUIRED"
  ],
	3221225495: [
    "{Not Enough Quota} Not enough virtual memory or paging file quota is available to complete the specified operation.",
    "STATUS_NO_MEMORY"
  ],
	3221225496: [
    "{Conflicting Address Range} The specified address range conflicts with the address space.",
    "STATUS_CONFLICTING_ADDRESSES"
  ],
	3221225497: [
    "The address range to unmap is not a mapped view.",
    "STATUS_NOT_MAPPED_VIEW"
  ],
	3221225498: [
    "The virtual memory cannot be freed.",
    "STATUS_UNABLE_TO_FREE_VM"
  ],
	3221225499: [
    "The specified section cannot be deleted.",
    "STATUS_UNABLE_TO_DELETE_SECTION"
  ],
	3221225500: [
    "An invalid system service was specified in a system service call.",
    "STATUS_INVALID_SYSTEM_SERVICE"
  ],
	3221225501: [
    "{EXCEPTION} Illegal Instruction An attempt was made to execute an illegal instruction.",
    "STATUS_ILLEGAL_INSTRUCTION"
  ],
	3221225502: [
    "{Invalid Lock Sequence} An attempt was made to execute an invalid lock sequence.",
    "STATUS_INVALID_LOCK_SEQUENCE"
  ],
	3221225503: [
    "{Invalid Mapping} An attempt was made to create a view for a section that is bigger than the section.",
    "STATUS_INVALID_VIEW_SIZE"
  ],
	3221225504: [
    "{Bad File} The attributes of the specified mapping file for a section of memory cannot be read.",
    "STATUS_INVALID_FILE_FOR_SECTION"
  ],
	3221225505: [
    "{Already Committed} The specified address range is already committed.",
    "STATUS_ALREADY_COMMITTED"
  ],
	3221225506: [
    "{Access Denied} A process has requested access to an object but has not been granted those access rights.",
    "STATUS_ACCESS_DENIED"
  ],
	3221225507: [
    "{Buffer Too Small} The buffer is too small to contain the entry. No information has been written to the buffer.",
    "STATUS_BUFFER_TOO_SMALL"
  ],
	3221225508: [
    "{Wrong Type} There is a mismatch between the type of object that is required by the requested operation and the type of object that is specified in the request.",
    "STATUS_OBJECT_TYPE_MISMATCH"
  ],
	3221225509: [
    "{EXCEPTION} Cannot Continue Windows cannot continue from this exception.",
    "STATUS_NONCONTINUABLE_EXCEPTION"
  ],
	3221225510: [
    "An invalid exception disposition was returned by an exception handler.",
    "STATUS_INVALID_DISPOSITION"
  ],
	3221225511: [
    "Unwind exception code.",
    "STATUS_UNWIND"
  ],
	3221225512: [
    "An invalid or unaligned stack was encountered during an unwind operation.",
    "STATUS_BAD_STACK"
  ],
	3221225513: [
    "An invalid unwind target was encountered during an unwind operation.",
    "STATUS_INVALID_UNWIND_TARGET"
  ],
	3221225514: [
    "An attempt was made to unlock a page of memory that was not locked.",
    "STATUS_NOT_LOCKED"
  ],
	3221225515: [
    "A device parity error on an I/O operation.",
    "STATUS_PARITY_ERROR"
  ],
	3221225516: [
    "An attempt was made to decommit uncommitted virtual memory.",
    "STATUS_UNABLE_TO_DECOMMIT_VM"
  ],
	3221225517: [
    "An attempt was made to change the attributes on memory that has not been committed.",
    "STATUS_NOT_COMMITTED"
  ],
	3221225518: [
    "Invalid object attributes specified to NtCreatePort or invalid port attributes specified to NtConnectPort.",
    "STATUS_INVALID_PORT_ATTRIBUTES"
  ],
	3221225519: [
    "The length of the message that was passed to NtRequestPort or NtRequestWaitReplyPort is longer than the maximum message that is allowed by the port.",
    "STATUS_PORT_MESSAGE_TOO_LONG"
  ],
	3221225520: [
    "An invalid combination of parameters was specified.",
    "STATUS_INVALID_PARAMETER_MIX"
  ],
	3221225521: [
    "An attempt was made to lower a quota limit below the current usage.",
    "STATUS_INVALID_QUOTA_LOWER"
  ],
	3221225522: [
    "{Corrupt Disk} The file system structure on the disk is corrupt and unusable. Run the Chkdsk utility on the volume.",
    "STATUS_DISK_CORRUPT_ERROR"
  ],
	3221225523: [
    "The object name is invalid.",
    "STATUS_OBJECT_NAME_INVALID"
  ],
	3221225524: [
    "The object name is not found.",
    "STATUS_OBJECT_NAME_NOT_FOUND"
  ],
	3221225525: [
    "The object name already exists.",
    "STATUS_OBJECT_NAME_COLLISION"
  ],
	3221225527: [
    "An attempt was made to send a message to a disconnected communication port.",
    "STATUS_PORT_DISCONNECTED"
  ],
	3221225528: [
    "An attempt was made to attach to a device that was already attached to another device.",
    "STATUS_DEVICE_ALREADY_ATTACHED"
  ],
	3221225529: [
    "The object path component was not a directory object.",
    "STATUS_OBJECT_PATH_INVALID"
  ],
	3221225530: [
    "{Path Not Found} The path does not exist.",
    "STATUS_OBJECT_PATH_NOT_FOUND"
  ],
	3221225531: [
    "The object path component was not a directory object.",
    "STATUS_OBJECT_PATH_SYNTAX_BAD"
  ],
	3221225532: [
    "{Data Overrun} A data overrun error occurred.",
    "STATUS_DATA_OVERRUN"
  ],
	3221225533: [
    "{Data Late} A data late error occurred.",
    "STATUS_DATA_LATE_ERROR"
  ],
	3221225534: [
    "{Data Error} An error occurred in reading or writing data.",
    "STATUS_DATA_ERROR"
  ],
	3221225535: [
    "{Bad CRC} A cyclic redundancy check (CRC) checksum error occurred.",
    "STATUS_CRC_ERROR"
  ],
	3221225536: [
    "{Section Too Large} The specified section is too big to map the file.",
    "STATUS_SECTION_TOO_BIG"
  ],
	3221225537: [
    "The NtConnectPort request is refused.",
    "STATUS_PORT_CONNECTION_REFUSED"
  ],
	3221225538: [
    "The type of port handle is invalid for the operation that is requested.",
    "STATUS_INVALID_PORT_HANDLE"
  ],
	3221225539: [
    "A file cannot be opened because the share access flags are incompatible.",
    "STATUS_SHARING_VIOLATION"
  ],
	3221225540: [
    "Insufficient quota exists to complete the operation.",
    "STATUS_QUOTA_EXCEEDED"
  ],
	3221225541: [
    "The specified page protection was not valid.",
    "STATUS_INVALID_PAGE_PROTECTION"
  ],
	3221225542: [
    "An attempt to release a mutant object was made by a thread that was not the owner of the mutant object.",
    "STATUS_MUTANT_NOT_OWNED"
  ],
	3221225543: [
    "An attempt was made to release a semaphore such that its maximum count would have been exceeded.",
    "STATUS_SEMAPHORE_LIMIT_EXCEEDED"
  ],
	3221225544: [
    "An attempt was made to set the DebugPort or ExceptionPort of a process, but a port already exists in the process, or an attempt was made to set the CompletionPort of a file but a port was already set in the file, or an attempt was made to set the associated completion port of an ALPC port but it is already set.",
    "STATUS_PORT_ALREADY_SET"
  ],
	3221225545: [
    "An attempt was made to query image information on a section that does not map an image.",
    "STATUS_SECTION_NOT_IMAGE"
  ],
	3221225546: [
    "An attempt was made to suspend a thread whose suspend count was at its maximum.",
    "STATUS_SUSPEND_COUNT_EXCEEDED"
  ],
	3221225547: [
    "An attempt was made to suspend a thread that has begun termination.",
    "STATUS_THREAD_IS_TERMINATING"
  ],
	3221225548: [
    "An attempt was made to set the working set limit to an invalid value (for example, the minimum greater than maximum).",
    "STATUS_BAD_WORKING_SET_LIMIT"
  ],
	3221225549: [
    "A section was created to map a file that is not compatible with an already existing section that maps the same file.",
    "STATUS_INCOMPATIBLE_FILE_MAP"
  ],
	3221225550: [
    "A view to a section specifies a protection that is incompatible with the protection of the initial view.",
    "STATUS_SECTION_PROTECTION"
  ],
	3221225551: [
    "An operation involving EAs failed because the file system does not support EAs.",
    "STATUS_EAS_NOT_SUPPORTED"
  ],
	3221225552: [
    "An EA operation failed because the EA set is too large.",
    "STATUS_EA_TOO_LARGE"
  ],
	3221225553: [
    "An EA operation failed because the name or EA index is invalid.",
    "STATUS_NONEXISTENT_EA_ENTRY"
  ],
	3221225554: [
    "The file for which EAs were requested has no EAs.",
    "STATUS_NO_EAS_ON_FILE"
  ],
	3221225555: [
    "The EA is corrupt and cannot be read.",
    "STATUS_EA_CORRUPT_ERROR"
  ],
	3221225556: [
    "A requested read/write cannot be granted due to a conflicting file lock.",
    "STATUS_FILE_LOCK_CONFLICT"
  ],
	3221225557: [
    "A requested file lock cannot be granted due to other existing locks.",
    "STATUS_LOCK_NOT_GRANTED"
  ],
	3221225558: [
    "A non-close operation has been requested of a file object that has a delete pending.",
    "STATUS_DELETE_PENDING"
  ],
	3221225559: [
    "An attempt was made to set the control attribute on a file. This attribute is not supported in the destination file system.",
    "STATUS_CTL_FILE_NOT_SUPPORTED"
  ],
	3221225560: [
    "Indicates a revision number that was encountered or specified is not one that is known by the service. It might be a more recent revision than the service is aware of.",
    "STATUS_UNKNOWN_REVISION"
  ],
	3221225561: [
    "Indicates that two revision levels are incompatible.",
    "STATUS_REVISION_MISMATCH"
  ],
	3221225562: [
    "Indicates a particular security ID cannot be assigned as the owner of an object.",
    "STATUS_INVALID_OWNER"
  ],
	3221225563: [
    "Indicates a particular security ID cannot be assigned as the primary group of an object.",
    "STATUS_INVALID_PRIMARY_GROUP"
  ],
	3221225564: [
    "An attempt has been made to operate on an impersonation token by a thread that is not currently impersonating a client.",
    "STATUS_NO_IMPERSONATION_TOKEN"
  ],
	3221225565: [
    "A mandatory group cannot be disabled.",
    "STATUS_CANT_DISABLE_MANDATORY"
  ],
	3221225566: [
    "No logon servers are currently available to service the logon request.",
    "STATUS_NO_LOGON_SERVERS"
  ],
	3221225567: [
    "A specified logon session does not exist. It might already have been terminated.",
    "STATUS_NO_SUCH_LOGON_SESSION"
  ],
	3221225568: [
    "A specified privilege does not exist.",
    "STATUS_NO_SUCH_PRIVILEGE"
  ],
	3221225569: [
    "A required privilege is not held by the client.",
    "STATUS_PRIVILEGE_NOT_HELD"
  ],
	3221225570: [
    "The name provided is not a properly formed account name.",
    "STATUS_INVALID_ACCOUNT_NAME"
  ],
	3221225571: [
    "The specified account already exists.",
    "STATUS_USER_EXISTS"
  ],
	3221225572: [
    "The specified account does not exist.",
    "STATUS_NO_SUCH_USER"
  ],
	3221225573: [
    "The specified group already exists.",
    "STATUS_GROUP_EXISTS"
  ],
	3221225574: [
    "The specified group does not exist.",
    "STATUS_NO_SUCH_GROUP"
  ],
	3221225575: [
    "The specified user account is already in the specified group account. Also used to indicate a group cannot be deleted because it contains a member.",
    "STATUS_MEMBER_IN_GROUP"
  ],
	3221225576: [
    "The specified user account is not a member of the specified group account.",
    "STATUS_MEMBER_NOT_IN_GROUP"
  ],
	3221225577: [
    "Indicates the requested operation would disable or delete the last remaining administration account. This is not allowed to prevent creating a situation in which the system cannot be administrated.",
    "STATUS_LAST_ADMIN"
  ],
	3221225578: [
    "When trying to update a password, this return status indicates that the value provided as the current password is not correct.",
    "STATUS_WRONG_PASSWORD"
  ],
	3221225579: [
    "When trying to update a password, this return status indicates that the value provided for the new password contains values that are not allowed in passwords.",
    "STATUS_ILL_FORMED_PASSWORD"
  ],
	3221225580: [
    "When trying to update a password, this status indicates that some password update rule has been violated. For example, the password might not meet length criteria.",
    "STATUS_PASSWORD_RESTRICTION"
  ],
	3221225581: [
    "The attempted logon is invalid. This is either due to a bad username or authentication information.",
    "STATUS_LOGON_FAILURE"
  ],
	3221225582: [
    "Indicates a referenced user name and authentication information are valid, but some user account restriction has prevented successful authentication (such as time-of-day restrictions).",
    "STATUS_ACCOUNT_RESTRICTION"
  ],
	3221225583: [
    "The user account has time restrictions and cannot be logged onto at this time.",
    "STATUS_INVALID_LOGON_HOURS"
  ],
	3221225584: [
    "The user account is restricted so that it cannot be used to log on from the source workstation.",
    "STATUS_INVALID_WORKSTATION"
  ],
	3221225585: [
    "The user account password has expired.",
    "STATUS_PASSWORD_EXPIRED"
  ],
	3221225586: [
    "The referenced account is currently disabled and cannot be logged on to.",
    "STATUS_ACCOUNT_DISABLED"
  ],
	3221225587: [
    "None of the information to be translated has been translated.",
    "STATUS_NONE_MAPPED"
  ],
	3221225588: [
    "The number of LUIDs requested cannot be allocated with a single allocation.",
    "STATUS_TOO_MANY_LUIDS_REQUESTED"
  ],
	3221225589: [
    "Indicates there are no more LUIDs to allocate.",
    "STATUS_LUIDS_EXHAUSTED"
  ],
	3221225590: [
    "Indicates the sub-authority value is invalid for the particular use.",
    "STATUS_INVALID_SUB_AUTHORITY"
  ],
	3221225591: [
    "Indicates the ACL structure is not valid.",
    "STATUS_INVALID_ACL"
  ],
	3221225592: [
    "Indicates the SID structure is not valid.",
    "STATUS_INVALID_SID"
  ],
	3221225593: [
    "Indicates the SECURITY_DESCRIPTOR structure is not valid.",
    "STATUS_INVALID_SECURITY_DESCR"
  ],
	3221225594: [
    "Indicates the specified procedure address cannot be found in the DLL.",
    "STATUS_PROCEDURE_NOT_FOUND"
  ],
	3221225595: [
    "{Bad Image} is either not designed to run on Windows or it contains an error. Try installing the program again using the original installation media or contact your system administrator or the software vendor for support.",
    "STATUS_INVALID_IMAGE_FORMAT"
  ],
	3221225596: [
    "An attempt was made to reference a token that does not exist. This is typically done by referencing the token that is associated with a thread when the thread is not impersonating a client.",
    "STATUS_NO_TOKEN"
  ],
	3221225597: [
    "Indicates that an attempt to build either an inherited ACL or ACE was not successful. This can be caused by a number of things. One of the more probable causes is the replacement of a CreatorId with a SID that did not fit into the ACE or ACL.",
    "STATUS_BAD_INHERITANCE_ACL"
  ],
	3221225598: [
    "The range specified in NtUnlockFile was not locked.",
    "STATUS_RANGE_NOT_LOCKED"
  ],
	3221225599: [
    "An operation failed because the disk was full.",
    "STATUS_DISK_FULL"
  ],
	3221225600: [
    "The GUID allocation server is disabled at the moment.",
    "STATUS_SERVER_DISABLED"
  ],
	3221225601: [
    "The GUID allocation server is enabled at the moment.",
    "STATUS_SERVER_NOT_DISABLED"
  ],
	3221225602: [
    "Too many GUIDs were requested from the allocation server at once.",
    "STATUS_TOO_MANY_GUIDS_REQUESTED"
  ],
	3221225603: [
    "The GUIDs could not be allocated because the Authority Agent was exhausted.",
    "STATUS_GUIDS_EXHAUSTED"
  ],
	3221225604: [
    "The value provided was an invalid value for an identifier authority.",
    "STATUS_INVALID_ID_AUTHORITY"
  ],
	3221225605: [
    "No more authority agent values are available for the particular identifier authority value.",
    "STATUS_AGENTS_EXHAUSTED"
  ],
	3221225606: [
    "An invalid volume label has been specified.",
    "STATUS_INVALID_VOLUME_LABEL"
  ],
	3221225607: [
    "A mapped section could not be extended.",
    "STATUS_SECTION_NOT_EXTENDED"
  ],
	3221225608: [
    "Specified section to flush does not map a data file.",
    "STATUS_NOT_MAPPED_DATA"
  ],
	3221225609: [
    "Indicates the specified image file did not contain a resource section.",
    "STATUS_RESOURCE_DATA_NOT_FOUND"
  ],
	3221225610: [
    "Indicates the specified resource type cannot be found in the image file.",
    "STATUS_RESOURCE_TYPE_NOT_FOUND"
  ],
	3221225611: [
    "Indicates the specified resource name cannot be found in the image file.",
    "STATUS_RESOURCE_NAME_NOT_FOUND"
  ],
	3221225612: [
    "{EXCEPTION} Array bounds exceeded.",
    "STATUS_ARRAY_BOUNDS_EXCEEDED"
  ],
	3221225613: [
    "{EXCEPTION} Floating-point denormal operand.",
    "STATUS_FLOAT_DENORMAL_OPERAND"
  ],
	3221225614: [
    "{EXCEPTION} Floating-point division by zero.",
    "STATUS_FLOAT_DIVIDE_BY_ZERO"
  ],
	3221225615: [
    "{EXCEPTION} Floating-point inexact result.",
    "STATUS_FLOAT_INEXACT_RESULT"
  ],
	3221225616: [
    "{EXCEPTION} Floating-point invalid operation.",
    "STATUS_FLOAT_INVALID_OPERATION"
  ],
	3221225617: [
    "{EXCEPTION} Floating-point overflow.",
    "STATUS_FLOAT_OVERFLOW"
  ],
	3221225618: [
    "{EXCEPTION} Floating-point stack check.",
    "STATUS_FLOAT_STACK_CHECK"
  ],
	3221225619: [
    "{EXCEPTION} Floating-point underflow.",
    "STATUS_FLOAT_UNDERFLOW"
  ],
	3221225620: [
    "{EXCEPTION} Integer division by zero.",
    "STATUS_INTEGER_DIVIDE_BY_ZERO"
  ],
	3221225621: [
    "{EXCEPTION} Integer overflow.",
    "STATUS_INTEGER_OVERFLOW"
  ],
	3221225622: [
    "{EXCEPTION} Privileged instruction.",
    "STATUS_PRIVILEGED_INSTRUCTION"
  ],
	3221225623: [
    "An attempt was made to install more paging files than the system supports.",
    "STATUS_TOO_MANY_PAGING_FILES"
  ],
	3221225624: [
    "The volume for a file has been externally altered such that the opened file is no longer valid.",
    "STATUS_FILE_INVALID"
  ],
	3221225625: [
    "When a block of memory is allotted for future updates, such as the memory allocated to hold discretionary access control and primary group information, successive updates might exceed the amount of memory originally allotted. Because a quota might already have been charged to several processes that have handles to the object, it is not reasonable to alter the size of the allocated memory. Instead, a request that requires more memory than has been allotted must fail and the STATUS_ALLOTTED_SPACE_EXCEEDED error returned.",
    "STATUS_ALLOTTED_SPACE_EXCEEDED"
  ],
	3221225626: [
    "Insufficient system resources exist to complete the API.",
    "STATUS_INSUFFICIENT_RESOURCES"
  ],
	3221225627: [
    "An attempt has been made to open a DFS exit path control file.",
    "STATUS_DFS_EXIT_PATH_FOUND"
  ],
	3221225628: [
    "There are bad blocks (sectors) on the hard disk.",
    "STATUS_DEVICE_DATA_ERROR"
  ],
	3221225629: [
    "There is bad cabling, non-termination, or the controller is not able to obtain access to the hard disk.",
    "STATUS_DEVICE_NOT_CONNECTED"
  ],
	3221225631: [
    "Virtual memory cannot be freed because the base address is not the base of the region and a region size of zero was specified.",
    "STATUS_FREE_VM_NOT_AT_BASE"
  ],
	3221225632: [
    "An attempt was made to free virtual memory that is not allocated.",
    "STATUS_MEMORY_NOT_ALLOCATED"
  ],
	3221225633: [
    "The working set is not big enough to allow the requested pages to be locked.",
    "STATUS_WORKING_SET_QUOTA"
  ],
	3221225634: [
    "{Write Protect Error} The disk cannot be written to because it is write-protected. Remove the write protection from the volume in drive.",
    "STATUS_MEDIA_WRITE_PROTECTED"
  ],
	3221225635: [
    "{Drive Not Ready} The drive is not ready for use; its door might be open. Check drive and make sure that a disk is inserted and that the drive door is closed.",
    "STATUS_DEVICE_NOT_READY"
  ],
	3221225636: [
    "The specified attributes are invalid or are incompatible with the attributes for the group as a whole.",
    "STATUS_INVALID_GROUP_ATTRIBUTES"
  ],
	3221225637: [
    "A specified impersonation level is invalid. Also used to indicate that a required impersonation level was not provided.",
    "STATUS_BAD_IMPERSONATION_LEVEL"
  ],
	3221225638: [
    "An attempt was made to open an anonymous-level token. Anonymous tokens cannot be opened.",
    "STATUS_CANT_OPEN_ANONYMOUS"
  ],
	3221225639: [
    "The validation information class requested was invalid.",
    "STATUS_BAD_VALIDATION_CLASS"
  ],
	3221225640: [
    "The type of a token object is inappropriate for its attempted use.",
    "STATUS_BAD_TOKEN_TYPE"
  ],
	3221225641: [
    "The type of a token object is inappropriate for its attempted use.",
    "STATUS_BAD_MASTER_BOOT_RECORD"
  ],
	3221225642: [
    "An attempt was made to execute an instruction at an unaligned address and the host system does not support unaligned instruction references.",
    "STATUS_INSTRUCTION_MISALIGNMENT"
  ],
	3221225643: [
    "The maximum named pipe instance count has been reached.",
    "STATUS_INSTANCE_NOT_AVAILABLE"
  ],
	3221225644: [
    "An instance of a named pipe cannot be found in the listening state.",
    "STATUS_PIPE_NOT_AVAILABLE"
  ],
	3221225645: [
    "The named pipe is not in the connected or closing state.",
    "STATUS_INVALID_PIPE_STATE"
  ],
	3221225646: [
    "The specified pipe is set to complete operations and there are current I/O operations queued so that it cannot be changed to queue operations.",
    "STATUS_PIPE_BUSY"
  ],
	3221225647: [
    "The specified handle is not open to the server end of the named pipe.",
    "STATUS_ILLEGAL_FUNCTION"
  ],
	3221225648: [
    "The specified named pipe is in the disconnected state.",
    "STATUS_PIPE_DISCONNECTED"
  ],
	3221225649: [
    "The specified named pipe is in the closing state.",
    "STATUS_PIPE_CLOSING"
  ],
	3221225650: [
    "The specified named pipe is in the connected state.",
    "STATUS_PIPE_CONNECTED"
  ],
	3221225651: [
    "The specified named pipe is in the listening state.",
    "STATUS_PIPE_LISTENING"
  ],
	3221225652: [
    "The specified named pipe is not in message mode.",
    "STATUS_INVALID_READ_MODE"
  ],
	3221225653: [
    "{Device Timeout} The specified I/O operation was not completed before the time-out period expired.",
    "STATUS_IO_TIMEOUT"
  ],
	3221225654: [
    "The specified file has been closed by another process.",
    "STATUS_FILE_FORCED_CLOSED"
  ],
	3221225655: [
    "Profiling is not started.",
    "STATUS_PROFILING_NOT_STARTED"
  ],
	3221225656: [
    "Profiling is not stopped.",
    "STATUS_PROFILING_NOT_STOPPED"
  ],
	3221225657: [
    "The passed ACL did not contain the minimum required information.",
    "STATUS_COULD_NOT_INTERPRET"
  ],
	3221225658: [
    "The file that was specified as a target is a directory, and the caller specified that it could be anything but a directory.",
    "STATUS_FILE_IS_A_DIRECTORY"
  ],
	3221225659: [
    "The request is not supported.",
    "STATUS_NOT_SUPPORTED"
  ],
	3221225660: [
    "This remote computer is not listening.",
    "STATUS_REMOTE_NOT_LISTENING"
  ],
	3221225661: [
    "A duplicate name exists on the network.",
    "STATUS_DUPLICATE_NAME"
  ],
	3221225662: [
    "The network path cannot be located.",
    "STATUS_BAD_NETWORK_PATH"
  ],
	3221225663: [
    "The network is busy.",
    "STATUS_NETWORK_BUSY"
  ],
	3221225664: [
    "This device does not exist.",
    "STATUS_DEVICE_DOES_NOT_EXIST"
  ],
	3221225665: [
    "The network BIOS command limit has been reached.",
    "STATUS_TOO_MANY_COMMANDS"
  ],
	3221225666: [
    "An I/O adapter hardware error has occurred.",
    "STATUS_ADAPTER_HARDWARE_ERROR"
  ],
	3221225667: [
    "The network responded incorrectly.",
    "STATUS_INVALID_NETWORK_RESPONSE"
  ],
	3221225668: [
    "An unexpected network error occurred.",
    "STATUS_UNEXPECTED_NETWORK_ERROR"
  ],
	3221225669: [
    "The remote adapter is not compatible.",
    "STATUS_BAD_REMOTE_ADAPTER"
  ],
	3221225670: [
    "The print queue is full.",
    "STATUS_PRINT_QUEUE_FULL"
  ],
	3221225671: [
    "Space to store the file that is waiting to be printed is not available on the server.",
    "STATUS_NO_SPOOL_SPACE"
  ],
	3221225672: [
    "The requested print file has been canceled.",
    "STATUS_PRINT_CANCELLED"
  ],
	3221225673: [
    "The network name was deleted.",
    "STATUS_NETWORK_NAME_DELETED"
  ],
	3221225674: [
    "Network access is denied.",
    "STATUS_NETWORK_ACCESS_DENIED"
  ],
	3221225675: [
    "{Incorrect Network Resource Type} The specified device type (LPT, for example) conflicts with the actual device type on the remote resource.",
    "STATUS_BAD_DEVICE_TYPE"
  ],
	3221225676: [
    "{Network Name Not Found} The specified share name cannot be found on the remote server.",
    "STATUS_BAD_NETWORK_NAME"
  ],
	3221225677: [
    "The name limit for the network adapter card of the local computer was exceeded.",
    "STATUS_TOO_MANY_NAMES"
  ],
	3221225678: [
    "The network BIOS session limit was exceeded.",
    "STATUS_TOO_MANY_SESSIONS"
  ],
	3221225679: [
    "File sharing has been temporarily paused.",
    "STATUS_SHARING_PAUSED"
  ],
	3221225680: [
    "No more connections can be made to this remote computer at this time because the computer has already accepted the maximum number of connections.",
    "STATUS_REQUEST_NOT_ACCEPTED"
  ],
	3221225681: [
    "Print or disk redirection is temporarily paused.",
    "STATUS_REDIRECTOR_PAUSED"
  ],
	3221225682: [
    "A network data fault occurred.",
    "STATUS_NET_WRITE_FAULT"
  ],
	3221225683: [
    "The number of active profiling objects is at the maximum and no more can be started.",
    "STATUS_PROFILING_AT_LIMIT"
  ],
	3221225684: [
    "{Incorrect Volume} The destination file of a rename request is located on a different device than the source of the rename request.",
    "STATUS_NOT_SAME_DEVICE"
  ],
	3221225685: [
    "The specified file has been renamed and thus cannot be modified.",
    "STATUS_FILE_RENAMED"
  ],
	3221225686: [
    "{Network Request Timeout} The session with a remote server has been disconnected because the time-out interval for a request has expired.",
    "STATUS_VIRTUAL_CIRCUIT_CLOSED"
  ],
	3221225687: [
    "Indicates an attempt was made to operate on the security of an object that does not have security associated with it.",
    "STATUS_NO_SECURITY_ON_OBJECT"
  ],
	3221225688: [
    "Used to indicate that an operation cannot continue without blocking for I/O.",
    "STATUS_CANT_WAIT"
  ],
	3221225689: [
    "Used to indicate that a read operation was done on an empty pipe.",
    "STATUS_PIPE_EMPTY"
  ],
	3221225690: [
    "Configuration information could not be read from the domain controller, either because the machine is unavailable or access has been denied.",
    "STATUS_CANT_ACCESS_DOMAIN_INFO"
  ],
	3221225691: [
    "Indicates that a thread attempted to terminate itself by default (called NtTerminateThread with NULL) and it was the last thread in the current process.",
    "STATUS_CANT_TERMINATE_SELF"
  ],
	3221225692: [
    "Indicates the Sam Server was in the wrong state to perform the desired operation.",
    "STATUS_INVALID_SERVER_STATE"
  ],
	3221225693: [
    "Indicates the domain was in the wrong state to perform the desired operation.",
    "STATUS_INVALID_DOMAIN_STATE"
  ],
	3221225694: [
    "This operation is only allowed for the primary domain controller of the domain.",
    "STATUS_INVALID_DOMAIN_ROLE"
  ],
	3221225695: [
    "The specified domain did not exist.",
    "STATUS_NO_SUCH_DOMAIN"
  ],
	3221225696: [
    "The specified domain already exists.",
    "STATUS_DOMAIN_EXISTS"
  ],
	3221225697: [
    "An attempt was made to exceed the limit on the number of domains per server for this release.",
    "STATUS_DOMAIN_LIMIT_EXCEEDED"
  ],
	3221225698: [
    "An error status returned when the opportunistic lock (oplock) request is denied.",
    "STATUS_OPLOCK_NOT_GRANTED"
  ],
	3221225699: [
    "An error status returned when an invalid opportunistic lock (oplock) acknowledgment is received by a file system.",
    "STATUS_INVALID_OPLOCK_PROTOCOL"
  ],
	3221225700: [
    "This error indicates that the requested operation cannot be completed due to a catastrophic media failure or an on-disk data structure corruption.",
    "STATUS_INTERNAL_DB_CORRUPTION"
  ],
	3221225701: [
    "An internal error occurred.",
    "STATUS_INTERNAL_ERROR"
  ],
	3221225702: [
    "Indicates generic access types were contained in an access mask which should already be mapped to non-generic access types.",
    "STATUS_GENERIC_NOT_MAPPED"
  ],
	3221225703: [
    "Indicates a security descriptor is not in the necessary format (absolute or self-relative).",
    "STATUS_BAD_DESCRIPTOR_FORMAT"
  ],
	3221225704: [
    "An access to a user buffer failed at an expected point in time. This code is defined because the caller does not want to accept STATUS_ACCESS_VIOLATION in its filter.",
    "STATUS_INVALID_USER_BUFFER"
  ],
	3221225705: [
    "If an I/O error that is not defined in the standard FsRtl filter is returned, it is converted to the following error, which is guaranteed to be in the filter. In this case, information is lost; however, the filter correctly handles the exception.",
    "STATUS_UNEXPECTED_IO_ERROR"
  ],
	3221225706: [
    "If an MM error that is not defined in the standard FsRtl filter is returned, it is converted to one of the following errors, which are guaranteed to be in the filter. In this case, information is lost; however, the filter correctly handles the exception.",
    "STATUS_UNEXPECTED_MM_CREATE_ERR"
  ],
	3221225707: [
    "If an MM error that is not defined in the standard FsRtl filter is returned, it is converted to one of the following errors, which are guaranteed to be in the filter. In this case, information is lost; however, the filter correctly handles the exception.",
    "STATUS_UNEXPECTED_MM_MAP_ERROR"
  ],
	3221225708: [
    "If an MM error that is not defined in the standard FsRtl filter is returned, it is converted to one of the following errors, which are guaranteed to be in the filter. In this case, information is lost; however, the filter correctly handles the exception.",
    "STATUS_UNEXPECTED_MM_EXTEND_ERR"
  ],
	3221225709: [
    "The requested action is restricted for use by logon processes only. The calling process has not registered as a logon process.",
    "STATUS_NOT_LOGON_PROCESS"
  ],
	3221225710: [
    "An attempt has been made to start a new session manager or LSA logon session by using an ID that is already in use.",
    "STATUS_LOGON_SESSION_EXISTS"
  ],
	3221225711: [
    "An invalid parameter was passed to a service or function as the first argument.",
    "STATUS_INVALID_PARAMETER_1"
  ],
	3221225712: [
    "An invalid parameter was passed to a service or function as the second argument.",
    "STATUS_INVALID_PARAMETER_2"
  ],
	3221225713: [
    "An invalid parameter was passed to a service or function as the third argument.",
    "STATUS_INVALID_PARAMETER_3"
  ],
	3221225714: [
    "An invalid parameter was passed to a service or function as the fourth argument.",
    "STATUS_INVALID_PARAMETER_4"
  ],
	3221225715: [
    "An invalid parameter was passed to a service or function as the fifth argument.",
    "STATUS_INVALID_PARAMETER_5"
  ],
	3221225716: [
    "An invalid parameter was passed to a service or function as the sixth argument.",
    "STATUS_INVALID_PARAMETER_6"
  ],
	3221225717: [
    "An invalid parameter was passed to a service or function as the seventh argument.",
    "STATUS_INVALID_PARAMETER_7"
  ],
	3221225718: [
    "An invalid parameter was passed to a service or function as the eighth argument.",
    "STATUS_INVALID_PARAMETER_8"
  ],
	3221225719: [
    "An invalid parameter was passed to a service or function as the ninth argument.",
    "STATUS_INVALID_PARAMETER_9"
  ],
	3221225720: [
    "An invalid parameter was passed to a service or function as the tenth argument.",
    "STATUS_INVALID_PARAMETER_10"
  ],
	3221225721: [
    "An invalid parameter was passed to a service or function as the eleventh argument.",
    "STATUS_INVALID_PARAMETER_11"
  ],
	3221225722: [
    "An invalid parameter was passed to a service or function as the twelfth argument.",
    "STATUS_INVALID_PARAMETER_12"
  ],
	3221225723: [
    "An attempt was made to access a network file, but the network software was not yet started.",
    "STATUS_REDIRECTOR_NOT_STARTED"
  ],
	3221225724: [
    "An attempt was made to start the redirector, but the redirector has already been started.",
    "STATUS_REDIRECTOR_STARTED"
  ],
	3221225725: [
    "A new guard page for the stack cannot be created.",
    "STATUS_STACK_OVERFLOW"
  ],
	3221225726: [
    "A specified authentication package is unknown.",
    "STATUS_NO_SUCH_PACKAGE"
  ],
	3221225727: [
    "A malformed function table was encountered during an unwind operation.",
    "STATUS_BAD_FUNCTION_TABLE"
  ],
	3221225728: [
    "Indicates the specified environment variable name was not found in the specified environment block.",
    "STATUS_VARIABLE_NOT_FOUND"
  ],
	3221225729: [
    "Indicates that the directory trying to be deleted is not empty.",
    "STATUS_DIRECTORY_NOT_EMPTY"
  ],
	3221225730: [
    "{Corrupt File} The file or directory is corrupt and unreadable. Run the Chkdsk utility.",
    "STATUS_FILE_CORRUPT_ERROR"
  ],
	3221225731: [
    "A requested opened file is not a directory.",
    "STATUS_NOT_A_DIRECTORY"
  ],
	3221225732: [
    "The logon session is not in a state that is consistent with the requested operation.",
    "STATUS_BAD_LOGON_SESSION_STATE"
  ],
	3221225733: [
    "An internal LSA error has occurred. An authentication package has requested the creation of a logon session but the ID of an already existing logon session has been specified.",
    "STATUS_LOGON_SESSION_COLLISION"
  ],
	3221225734: [
    "A specified name string is too long for its intended use.",
    "STATUS_NAME_TOO_LONG"
  ],
	3221225735: [
    "The user attempted to force close the files on a redirected drive, but there were opened files on the drive, and the user did not specify a sufficient level of force.",
    "STATUS_FILES_OPEN"
  ],
	3221225736: [
    "The user attempted to force close the files on a redirected drive, but there were opened directories on the drive, and the user did not specify a sufficient level of force.",
    "STATUS_CONNECTION_IN_USE"
  ],
	3221225737: [
    "RtlFindMessage could not locate the requested message ID in the message table resource.",
    "STATUS_MESSAGE_NOT_FOUND"
  ],
	3221225738: [
    "An attempt was made to duplicate an object handle into or out of an exiting process.",
    "STATUS_PROCESS_IS_TERMINATING"
  ],
	3221225739: [
    "Indicates an invalid value has been provided for the LogonType requested.",
    "STATUS_INVALID_LOGON_TYPE"
  ],
	3221225740: [
    "Indicates that an attempt was made to assign protection to a file system file or directory and one of the SIDs in the security descriptor could not be translated into a GUID that could be stored by the file system. This causes the protection attempt to fail, which might cause a file creation attempt to fail.",
    "STATUS_NO_GUID_TRANSLATION"
  ],
	3221225741: [
    "Indicates that an attempt has been made to impersonate via a named pipe that has not yet been read from.",
    "STATUS_CANNOT_IMPERSONATE"
  ],
	3221225742: [
    "Indicates that the specified image is already loaded.",
    "STATUS_IMAGE_ALREADY_LOADED"
  ],
	3221225751: [
    "Indicates that an attempt was made to change the size of the LDT for a process that has no LDT.",
    "STATUS_NO_LDT"
  ],
	3221225752: [
    "Indicates that an attempt was made to grow an LDT by setting its size, or that the size was not an even number of selectors.",
    "STATUS_INVALID_LDT_SIZE"
  ],
	3221225753: [
    "Indicates that the starting value for the LDT information was not an integral multiple of the selector size.",
    "STATUS_INVALID_LDT_OFFSET"
  ],
	3221225754: [
    "Indicates that the user supplied an invalid descriptor when trying to set up LDT descriptors.",
    "STATUS_INVALID_LDT_DESCRIPTOR"
  ],
	3221225755: [
    "The specified image file did not have the correct format. It appears to be NE format.",
    "STATUS_INVALID_IMAGE_NE_FORMAT"
  ],
	3221225756: [
    "Indicates that the transaction state of a registry subtree is incompatible with the requested operation. For example, a request has been made to start a new transaction with one already in progress, or a request has been made to apply a transaction when one is not currently in progress.",
    "STATUS_RXACT_INVALID_STATE"
  ],
	3221225757: [
    "Indicates an error has occurred during a registry transaction commit. The database has been left in an unknown, but probably inconsistent, state. The state of the registry transaction is left as COMMITTING.",
    "STATUS_RXACT_COMMIT_FAILURE"
  ],
	3221225758: [
    "An attempt was made to map a file of size zero with the maximum size specified as zero.",
    "STATUS_MAPPED_FILE_SIZE_ZERO"
  ],
	3221225759: [
    "Too many files are opened on a remote server. This error should only be returned by the Windows redirector on a remote drive.",
    "STATUS_TOO_MANY_OPENED_FILES"
  ],
	3221225760: [
    "The I/O request was canceled.",
    "STATUS_CANCELLED"
  ],
	3221225761: [
    "An attempt has been made to remove a file or directory that cannot be deleted.",
    "STATUS_CANNOT_DELETE"
  ],
	3221225762: [
    "Indicates a name that was specified as a remote computer name is syntactically invalid.",
    "STATUS_INVALID_COMPUTER_NAME"
  ],
	3221225763: [
    "An I/O request other than close was performed on a file after it was deleted, which can only happen to a request that did not complete before the last handle was closed via NtClose.",
    "STATUS_FILE_DELETED"
  ],
	3221225764: [
    "Indicates an operation that is incompatible with built-in accounts has been attempted on a built-in (special) SAM account. For example, built-in accounts cannot be deleted.",
    "STATUS_SPECIAL_ACCOUNT"
  ],
	3221225765: [
    "The operation requested cannot be performed on the specified group because it is a built-in special group.",
    "STATUS_SPECIAL_GROUP"
  ],
	3221225766: [
    "The operation requested cannot be performed on the specified user because it is a built-in special user.",
    "STATUS_SPECIAL_USER"
  ],
	3221225767: [
    "Indicates a member cannot be removed from a group because the group is currently the member's primary group.",
    "STATUS_MEMBERS_PRIMARY_GROUP"
  ],
	3221225768: [
    "An I/O request other than close and several other special case operations was attempted using a file object that had already been closed.",
    "STATUS_FILE_CLOSED"
  ],
	3221225769: [
    "Indicates a process has too many threads to perform the requested action. For example, assignment of a primary token can be performed only when a process has zero or one threads.",
    "STATUS_TOO_MANY_THREADS"
  ],
	3221225770: [
    "An attempt was made to operate on a thread within a specific process, but the specified thread is not in the specified process.",
    "STATUS_THREAD_NOT_IN_PROCESS"
  ],
	3221225771: [
    "An attempt was made to establish a token for use as a primary token but the token is already in use. A token can only be the primary token of one process at a time.",
    "STATUS_TOKEN_ALREADY_IN_USE"
  ],
	3221225772: [
    "The page file quota was exceeded.",
    "STATUS_PAGEFILE_QUOTA_EXCEEDED"
  ],
	3221225773: [
    "{Out of Virtual Memory} Your system is low on virtual memory. To ensure that Windows runs correctly, increase the size of your virtual memory paging file. For more information, see Help.",
    "STATUS_COMMITMENT_LIMIT"
  ],
	3221225774: [
    "The specified image file did not have the correct format: it appears to be LE format.",
    "STATUS_INVALID_IMAGE_LE_FORMAT"
  ],
	3221225775: [
    "The specified image file did not have the correct format: it did not have an initial MZ.",
    "STATUS_INVALID_IMAGE_NOT_MZ"
  ],
	3221225776: [
    "The specified image file did not have the correct format: it did not have a proper e_lfarlc in the MZ header.",
    "STATUS_INVALID_IMAGE_PROTECT"
  ],
	3221225777: [
    "The specified image file did not have the correct format: it appears to be a 16-bit Windows image.",
    "STATUS_INVALID_IMAGE_WIN_16"
  ],
	3221225778: [
    "The Netlogon service cannot start because another Netlogon service running in the domain conflicts with the specified role.",
    "STATUS_LOGON_SERVER_CONFLICT"
  ],
	3221225779: [
    "The time at the primary domain controller is different from the time at the backup domain controller or member server by too large an amount.",
    "STATUS_TIME_DIFFERENCE_AT_DC"
  ],
	3221225780: [
    "On applicable Windows Server releases, the SAM database is significantly out of synchronization with the copy on the domain controller. A complete synchronization is required.",
    "STATUS_SYNCHRONIZATION_REQUIRED"
  ],
	3221225781: [
    "{Unable To Locate Component} This application has failed to start because the component was not found. Reinstalling the application might fix this problem.",
    "STATUS_DLL_NOT_FOUND"
  ],
	3221225782: [
    "The NtCreateFile API failed. This error should never be returned to an application; it is a place holder for the Windows LAN Manager Redirector to use in its internal error-mapping routines.",
    "STATUS_OPEN_FAILED"
  ],
	3221225783: [
    "{Privilege Failed} The I/O permissions for the process could not be changed.",
    "STATUS_IO_PRIVILEGE_FAILED"
  ],
	3221225784: [
    "{Ordinal Not Found} The ordinal could not be located in the dynamic link library.",
    "STATUS_ORDINAL_NOT_FOUND"
  ],
	3221225785: [
    "{Entry Point Not Found} The procedure entry point could not be located in the dynamic link library.",
    "STATUS_ENTRYPOINT_NOT_FOUND"
  ],
	3221225786: [
    "{Application Exit by CTRL+C} The application terminated as a result of a CTRL+C.",
    "STATUS_CONTROL_C_EXIT"
  ],
	3221225787: [
    "{Virtual Circuit Closed} The network transport on your computer has closed a network connection. There might or might not be I/O requests outstanding.",
    "STATUS_LOCAL_DISCONNECT"
  ],
	3221225788: [
    "{Virtual Circuit Closed} The network transport on a remote computer has closed a network connection. There might or might not be I/O requests outstanding.",
    "STATUS_REMOTE_DISCONNECT"
  ],
	3221225789: [
    "{Insufficient Resources on Remote Computer} The remote computer has insufficient resources to complete the network request. For example, the remote computer might not have enough available memory to carry out the request at this time.",
    "STATUS_REMOTE_RESOURCES"
  ],
	3221225790: [
    "{Virtual Circuit Closed} An existing connection (virtual circuit) has been broken at the remote computer. There is probably something wrong with the network software protocol or the network hardware on the remote computer.",
    "STATUS_LINK_FAILED"
  ],
	3221225791: [
    "{Virtual Circuit Closed} The network transport on your computer has closed a network connection because it had to wait too long for a response from the remote computer.",
    "STATUS_LINK_TIMEOUT"
  ],
	3221225792: [
    "The connection handle that was given to the transport was invalid.",
    "STATUS_INVALID_CONNECTION"
  ],
	3221225793: [
    "The address handle that was given to the transport was invalid.",
    "STATUS_INVALID_ADDRESS"
  ],
	3221225794: [
    "{DLL Initialization Failed} Initialization of the dynamic link library failed. The process is terminating abnormally.",
    "STATUS_DLL_INIT_FAILED"
  ],
	3221225795: [
    "{Missing System File} The required system file is bad or missing.",
    "STATUS_MISSING_SYSTEMFILE"
  ],
	3221225796: [
    "{Application Error} An exception occurred in the application.",
    "STATUS_UNHANDLED_EXCEPTION"
  ],
	3221225797: [
    "{Application Error} The application failed to initialize properly. Click OK to terminate the application.",
    "STATUS_APP_INIT_FAILURE"
  ],
	3221225798: [
    "{Unable to Create Paging File} The creation of the paging file has failed.",
    "STATUS_PAGEFILE_CREATE_FAILED"
  ],
	3221225799: [
    "{No Paging File Specified} No paging file was specified in the system configuration.",
    "STATUS_NO_PAGEFILE"
  ],
	3221225800: [
    "{Incorrect System Call Level} An invalid level was passed into the specified system call.",
    "STATUS_INVALID_LEVEL"
  ],
	3221225801: [
    "{Incorrect Password to LAN Manager Server} You specified an incorrect password to a LAN Manager 2.x or MS-NET server.",
    "STATUS_WRONG_PASSWORD_CORE"
  ],
	3221225802: [
    "{EXCEPTION} A real-mode application issued a floating-point instruction and floating-point hardware is not present.",
    "STATUS_ILLEGAL_FLOAT_CONTEXT"
  ],
	3221225803: [
    "The pipe operation has failed because the other end of the pipe has been closed.",
    "STATUS_PIPE_BROKEN"
  ],
	3221225804: [
    "{The Registry Is Corrupt} The structure of one of the files that contains registry data is corrupt; the image of the file in memory is corrupt; or the file could not be recovered because the alternate copy or log was absent or corrupt.",
    "STATUS_REGISTRY_CORRUPT"
  ],
	3221225805: [
    "An I/O operation initiated by the Registry failed and cannot be recovered. The registry could not read in, write out, or flush one of the files that contain the system's image of the registry.",
    "STATUS_REGISTRY_IO_FAILED"
  ],
	3221225806: [
    "An event pair synchronization operation was performed using the thread-specific client/server event pair object, but no event pair object was associated with the thread.",
    "STATUS_NO_EVENT_PAIR"
  ],
	3221225807: [
    "The volume does not contain a recognized file system. Be sure that all required file system drivers are loaded and that the volume is not corrupt.",
    "STATUS_UNRECOGNIZED_VOLUME"
  ],
	3221225808: [
    "No serial device was successfully initialized. The serial driver will unload.",
    "STATUS_SERIAL_NO_DEVICE_INITED"
  ],
	3221225809: [
    "The specified local group does not exist.",
    "STATUS_NO_SUCH_ALIAS"
  ],
	3221225810: [
    "The specified account name is not a member of the group.",
    "STATUS_MEMBER_NOT_IN_ALIAS"
  ],
	3221225811: [
    "The specified account name is already a member of the group.",
    "STATUS_MEMBER_IN_ALIAS"
  ],
	3221225812: [
    "The specified local group already exists.",
    "STATUS_ALIAS_EXISTS"
  ],
	3221225813: [
    "A requested type of logon (for example, interactive, network, and service) is not granted by the local security policy of the target system. Ask the system administrator to grant the necessary form of logon.",
    "STATUS_LOGON_NOT_GRANTED"
  ],
	3221225814: [
    "The maximum number of secrets that can be stored in a single system was exceeded. The length and number of secrets is limited to satisfy U.S. State Department export restrictions.",
    "STATUS_TOO_MANY_SECRETS"
  ],
	3221225815: [
    "The length of a secret exceeds the maximum allowable length. The length and number of secrets is limited to satisfy U.S. State Department export restrictions.",
    "STATUS_SECRET_TOO_LONG"
  ],
	3221225816: [
    "The local security authority (LSA) database contains an internal inconsistency.",
    "STATUS_INTERNAL_DB_ERROR"
  ],
	3221225817: [
    "The requested operation cannot be performed in full-screen mode.",
    "STATUS_FULLSCREEN_MODE"
  ],
	3221225818: [
    "During a logon attempt, the user's security context accumulated too many security IDs. This is a very unusual situation. Remove the user from some global or local groups to reduce the number of security IDs to incorporate into the security context.",
    "STATUS_TOO_MANY_CONTEXT_IDS"
  ],
	3221225819: [
    "A user has requested a type of logon (for example, interactive or network) that has not been granted. An administrator has control over who can logon interactively and through the network.",
    "STATUS_LOGON_TYPE_NOT_GRANTED"
  ],
	3221225820: [
    "The system has attempted to load or restore a file into the registry, and the specified file is not in the format of a registry file.",
    "STATUS_NOT_REGISTRY_FILE"
  ],
	3221225821: [
    "An attempt was made to change a user password in the security account manager without providing the necessary Windows cross-encrypted password.",
    "STATUS_NT_CROSS_ENCRYPTION_REQUIRED"
  ],
	3221225822: [
    "A domain server has an incorrect configuration.",
    "STATUS_DOMAIN_CTRLR_CONFIG_ERROR"
  ],
	3221225823: [
    "An attempt was made to explicitly access the secondary copy of information via a device control to the fault tolerance driver and the secondary copy is not present in the system.",
    "STATUS_FT_MISSING_MEMBER"
  ],
	3221225824: [
    "A configuration registry node that represents a driver service entry was ill-formed and did not contain the required value entries.",
    "STATUS_ILL_FORMED_SERVICE_ENTRY"
  ],
	3221225825: [
    "An illegal character was encountered. For a multibyte character set, this includes a lead byte without a succeeding trail byte. For the Unicode character set this includes the characters 0xFFFF and 0xFFFE.",
    "STATUS_ILLEGAL_CHARACTER"
  ],
	3221225826: [
    "No mapping for the Unicode character exists in the target multibyte code page.",
    "STATUS_UNMAPPABLE_CHARACTER"
  ],
	3221225827: [
    "The Unicode character is not defined in the Unicode character set that is installed on the system.",
    "STATUS_UNDEFINED_CHARACTER"
  ],
	3221225828: [
    "The paging file cannot be created on a floppy disk.",
    "STATUS_FLOPPY_VOLUME"
  ],
	3221225829: [
    "{Floppy Disk Error} While accessing a floppy disk, an ID address mark was not found.",
    "STATUS_FLOPPY_ID_MARK_NOT_FOUND"
  ],
	3221225830: [
    "{Floppy Disk Error} While accessing a floppy disk, the track address from the sector ID field was found to be different from the track address that is maintained by the controller.",
    "STATUS_FLOPPY_WRONG_CYLINDER"
  ],
	3221225831: [
    "{Floppy Disk Error} The floppy disk controller reported an error that is not recognized by the floppy disk driver.",
    "STATUS_FLOPPY_UNKNOWN_ERROR"
  ],
	3221225832: [
    "{Floppy Disk Error} While accessing a floppy-disk, the controller returned inconsistent results via its registers.",
    "STATUS_FLOPPY_BAD_REGISTERS"
  ],
	3221225833: [
    "{Hard Disk Error} While accessing the hard disk, a recalibrate operation failed, even after retries.",
    "STATUS_DISK_RECALIBRATE_FAILED"
  ],
	3221225834: [
    "{Hard Disk Error} While accessing the hard disk, a disk operation failed even after retries.",
    "STATUS_DISK_OPERATION_FAILED"
  ],
	3221225835: [
    "{Hard Disk Error} While accessing the hard disk, a disk controller reset was needed, but even that failed.",
    "STATUS_DISK_RESET_FAILED"
  ],
	3221225836: [
    "An attempt was made to open a device that was sharing an interrupt request (IRQ) with other devices. At least one other device that uses that IRQ was already opened. Two concurrent opens of devices that share an IRQ and only work via interrupts is not supported for the particular bus type that the devices use.",
    "STATUS_SHARED_IRQ_BUSY"
  ],
	3221225837: [
    "{FT Orphaning} A disk that is part of a fault-tolerant volume can no longer be accessed.",
    "STATUS_FT_ORPHANING"
  ],
	3221225838: [
    "The basic input/output system (BIOS) failed to connect a system interrupt to the device or bus for which the device is connected.",
    "STATUS_BIOS_FAILED_TO_CONNECT_INTERRUPT"
  ],
	3221225842: [
    "The tape could not be partitioned.",
    "STATUS_PARTITION_FAILURE"
  ],
	3221225843: [
    "When accessing a new tape of a multi-volume partition, the current blocksize is incorrect.",
    "STATUS_INVALID_BLOCK_LENGTH"
  ],
	3221225844: [
    "The tape partition information could not be found when loading a tape.",
    "STATUS_DEVICE_NOT_PARTITIONED"
  ],
	3221225845: [
    "An attempt to lock the eject media mechanism failed.",
    "STATUS_UNABLE_TO_LOCK_MEDIA"
  ],
	3221225846: [
    "An attempt to unload media failed.",
    "STATUS_UNABLE_TO_UNLOAD_MEDIA"
  ],
	3221225847: [
    "The physical end of tape was detected.",
    "STATUS_EOM_OVERFLOW"
  ],
	3221225848: [
    "{No Media} There is no media in the drive. Insert media into drive.",
    "STATUS_NO_MEDIA"
  ],
	3221225850: [
    "A member could not be added to or removed from the local group because the member does not exist.",
    "STATUS_NO_SUCH_MEMBER"
  ],
	3221225851: [
    "A new member could not be added to a local group because the member has the wrong account type.",
    "STATUS_INVALID_MEMBER"
  ],
	3221225852: [
    "An illegal operation was attempted on a registry key that has been marked for deletion.",
    "STATUS_KEY_DELETED"
  ],
	3221225853: [
    "The system could not allocate the required space in a registry log.",
    "STATUS_NO_LOG_SPACE"
  ],
	3221225854: [
    "Too many SIDs have been specified.",
    "STATUS_TOO_MANY_SIDS"
  ],
	3221225855: [
    "An attempt was made to change a user password in the security account manager without providing the necessary LM cross-encrypted password.",
    "STATUS_LM_CROSS_ENCRYPTION_REQUIRED"
  ],
	3221225856: [
    "An attempt was made to create a symbolic link in a registry key that already has subkeys or values.",
    "STATUS_KEY_HAS_CHILDREN"
  ],
	3221225857: [
    "An attempt was made to create a stable subkey under a volatile parent key.",
    "STATUS_CHILD_MUST_BE_VOLATILE"
  ],
	3221225858: [
    "The I/O device is configured incorrectly or the configuration parameters to the driver are incorrect.",
    "STATUS_DEVICE_CONFIGURATION_ERROR"
  ],
	3221225859: [
    "An error was detected between two drivers or within an I/O driver.",
    "STATUS_DRIVER_INTERNAL_ERROR"
  ],
	3221225860: [
    "The device is not in a valid state to perform this request.",
    "STATUS_INVALID_DEVICE_STATE"
  ],
	3221225861: [
    "The I/O device reported an I/O error.",
    "STATUS_IO_DEVICE_ERROR"
  ],
	3221225862: [
    "A protocol error was detected between the driver and the device.",
    "STATUS_DEVICE_PROTOCOL_ERROR"
  ],
	3221225863: [
    "This operation is only allowed for the primary domain controller of the domain.",
    "STATUS_BACKUP_CONTROLLER"
  ],
	3221225864: [
    "The log file space is insufficient to support this operation.",
    "STATUS_LOG_FILE_FULL"
  ],
	3221225865: [
    "A write operation was attempted to a volume after it was dismounted.",
    "STATUS_TOO_LATE"
  ],
	3221225866: [
    "The workstation does not have a trust secret for the primary domain in the local LSA database.",
    "STATUS_NO_TRUST_LSA_SECRET"
  ],
	3221225867: [
    "On applicable Windows Server releases, the SAM database does not have a computer account for this workstation trust relationship.",
    "STATUS_NO_TRUST_SAM_ACCOUNT"
  ],
	3221225868: [
    "The logon request failed because the trust relationship between the primary domain and the trusted domain failed.",
    "STATUS_TRUSTED_DOMAIN_FAILURE"
  ],
	3221225869: [
    "The logon request failed because the trust relationship between this workstation and the primary domain failed.",
    "STATUS_TRUSTED_RELATIONSHIP_FAILURE"
  ],
	3221225870: [
    "The Eventlog log file is corrupt.",
    "STATUS_EVENTLOG_FILE_CORRUPT"
  ],
	3221225871: [
    "No Eventlog log file could be opened. The Eventlog service did not start.",
    "STATUS_EVENTLOG_CANT_START"
  ],
	3221225872: [
    "The network logon failed. This might be because the validation authority cannot be reached.",
    "STATUS_TRUST_FAILURE"
  ],
	3221225873: [
    "An attempt was made to acquire a mutant such that its maximum count would have been exceeded.",
    "STATUS_MUTANT_LIMIT_EXCEEDED"
  ],
	3221225874: [
    "An attempt was made to logon, but the NetLogon service was not started.",
    "STATUS_NETLOGON_NOT_STARTED"
  ],
	3221225875: [
    "The user account has expired.",
    "STATUS_ACCOUNT_EXPIRED"
  ],
	3221225876: [
    "{EXCEPTION} Possible deadlock condition.",
    "STATUS_POSSIBLE_DEADLOCK"
  ],
	3221225877: [
    "Multiple connections to a server or shared resource by the same user, using more than one user name, are not allowed. Disconnect all previous connections to the server or shared resource and try again.",
    "STATUS_NETWORK_CREDENTIAL_CONFLICT"
  ],
	3221225878: [
    "An attempt was made to establish a session to a network server, but there are already too many sessions established to that server.",
    "STATUS_REMOTE_SESSION_LIMIT"
  ],
	3221225879: [
    "The log file has changed between reads.",
    "STATUS_EVENTLOG_FILE_CHANGED"
  ],
	3221225880: [
    "The account used is an interdomain trust account. Use your global user account or local user account to access this server.",
    "STATUS_NOLOGON_INTERDOMAIN_TRUST_ACCOUNT"
  ],
	3221225881: [
    "The account used is a computer account. Use your global user account or local user account to access this server.",
    "STATUS_NOLOGON_WORKSTATION_TRUST_ACCOUNT"
  ],
	3221225882: [
    "The account used is a server trust account. Use your global user account or local user account to access this server.",
    "STATUS_NOLOGON_SERVER_TRUST_ACCOUNT"
  ],
	3221225883: [
    "The name or SID of the specified domain is inconsistent with the trust information for that domain.",
    "STATUS_DOMAIN_TRUST_INCONSISTENT"
  ],
	3221225884: [
    "A volume has been accessed for which a file system driver is required that has not yet been loaded.",
    "STATUS_FS_DRIVER_REQUIRED"
  ],
	3221225885: [
    "Indicates that the specified image is already loaded as a DLL.",
    "STATUS_IMAGE_ALREADY_LOADED_AS_DLL"
  ],
	3221225886: [
    "Short name settings cannot be changed on this volume due to the global registry setting.",
    "STATUS_INCOMPATIBLE_WITH_GLOBAL_SHORT_NAME_REGISTRY_SETTING"
  ],
	3221225887: [
    "Short names are not enabled on this volume.",
    "STATUS_SHORT_NAMES_NOT_ENABLED_ON_VOLUME"
  ],
	3221225888: [
    "The security stream for the given volume is in an inconsistent state. Please run CHKDSK on the volume.",
    "STATUS_SECURITY_STREAM_IS_INCONSISTENT"
  ],
	3221225889: [
    "A requested file lock operation cannot be processed due to an invalid byte range.",
    "STATUS_INVALID_LOCK_RANGE"
  ],
	3221225890: [
    "The specified access control entry (ACE) contains an invalid condition.",
    "STATUS_INVALID_ACE_CONDITION"
  ],
	3221225891: [
    "The subsystem needed to support the image type is not present.",
    "STATUS_IMAGE_SUBSYSTEM_NOT_PRESENT"
  ],
	3221225892: [
    "The specified file already has a notification GUID associated with it.",
    "STATUS_NOTIFICATION_GUID_ALREADY_DEFINED"
  ],
	3221225985: [
    "A remote open failed because the network open restrictions were not satisfied.",
    "STATUS_NETWORK_OPEN_RESTRICTION"
  ],
	3221225986: [
    "There is no user session key for the specified logon session.",
    "STATUS_NO_USER_SESSION_KEY"
  ],
	3221225987: [
    "The remote user session has been deleted.",
    "STATUS_USER_SESSION_DELETED"
  ],
	3221225988: [
    "Indicates the specified resource language ID cannot be found in the image file.",
    "STATUS_RESOURCE_LANG_NOT_FOUND"
  ],
	3221225989: [
    "Insufficient server resources exist to complete the request.",
    "STATUS_INSUFF_SERVER_RESOURCES"
  ],
	3221225990: [
    "The size of the buffer is invalid for the specified operation.",
    "STATUS_INVALID_BUFFER_SIZE"
  ],
	3221225991: [
    "The transport rejected the specified network address as invalid.",
    "STATUS_INVALID_ADDRESS_COMPONENT"
  ],
	3221225992: [
    "The transport rejected the specified network address due to invalid use of a wildcard.",
    "STATUS_INVALID_ADDRESS_WILDCARD"
  ],
	3221225993: [
    "The transport address could not be opened because all the available addresses are in use.",
    "STATUS_TOO_MANY_ADDRESSES"
  ],
	3221225994: [
    "The transport address could not be opened because it already exists.",
    "STATUS_ADDRESS_ALREADY_EXISTS"
  ],
	3221225995: [
    "The transport address is now closed.",
    "STATUS_ADDRESS_CLOSED"
  ],
	3221225996: [
    "The transport connection is now disconnected.",
    "STATUS_CONNECTION_DISCONNECTED"
  ],
	3221225997: [
    "The transport connection has been reset.",
    "STATUS_CONNECTION_RESET"
  ],
	3221225998: [
    "The transport cannot dynamically acquire any more nodes.",
    "STATUS_TOO_MANY_NODES"
  ],
	3221225999: [
    "The transport aborted a pending transaction.",
    "STATUS_TRANSACTION_ABORTED"
  ],
	3221226000: [
    "The transport timed out a request that is waiting for a response.",
    "STATUS_TRANSACTION_TIMED_OUT"
  ],
	3221226001: [
    "The transport did not receive a release for a pending response.",
    "STATUS_TRANSACTION_NO_RELEASE"
  ],
	3221226002: [
    "The transport did not find a transaction that matches the specific token.",
    "STATUS_TRANSACTION_NO_MATCH"
  ],
	3221226003: [
    "The transport had previously responded to a transaction request.",
    "STATUS_TRANSACTION_RESPONDED"
  ],
	3221226004: [
    "The transport does not recognize the specified transaction request ID.",
    "STATUS_TRANSACTION_INVALID_ID"
  ],
	3221226005: [
    "The transport does not recognize the specified transaction request type.",
    "STATUS_TRANSACTION_INVALID_TYPE"
  ],
	3221226006: [
    "The transport can only process the specified request on the server side of a session.",
    "STATUS_NOT_SERVER_SESSION"
  ],
	3221226007: [
    "The transport can only process the specified request on the client side of a session.",
    "STATUS_NOT_CLIENT_SESSION"
  ],
	3221226008: [
    "{Registry File Failure} The registry cannot load the hive file or its log or alternate. It is corrupt, absent, or not writable.",
    "STATUS_CANNOT_LOAD_REGISTRY_FILE"
  ],
	3221226009: [
    "{Unexpected Failure in DebugActiveProcess} An unexpected failure occurred while processing a DebugActiveProcess API request. Choosing OK will terminate the process, and choosing Cancel will ignore the error.",
    "STATUS_DEBUG_ATTACH_FAILED"
  ],
	3221226010: [
    "{Fatal System Error} The system process terminated unexpectedly. The system has been shut down.",
    "STATUS_SYSTEM_PROCESS_TERMINATED"
  ],
	3221226011: [
    "{Data Not Accepted} The TDI client could not handle the data received during an indication.",
    "STATUS_DATA_NOT_ACCEPTED"
  ],
	3221226012: [
    "{Unable to Retrieve Browser Server List} The list of servers for this workgroup is not currently available.",
    "STATUS_NO_BROWSER_SERVERS_FOUND"
  ],
	3221226013: [
    "NTVDM encountered a hard error.",
    "STATUS_VDM_HARD_ERROR"
  ],
	3221226014: [
    "{Cancel Timeout} The driver failed to complete a canceled I/O request in the allotted time.",
    "STATUS_DRIVER_CANCEL_TIMEOUT"
  ],
	3221226015: [
    "{Reply Message Mismatch} An attempt was made to reply to an LPC message, but the thread specified by the client ID in the message was not waiting on that message.",
    "STATUS_REPLY_MESSAGE_MISMATCH"
  ],
	3221226016: [
    "{Mapped View Alignment Incorrect} An attempt was made to map a view of a file, but either the specified base address or the offset into the file were not aligned on the proper allocation granularity.",
    "STATUS_MAPPED_ALIGNMENT"
  ],
	3221226017: [
    "{Bad Image Checksum} The image is possibly corrupt. The header checksum does not match the computed checksum.",
    "STATUS_IMAGE_CHECKSUM_MISMATCH"
  ],
	3221226018: [
    "{Delayed Write Failed} Windows was unable to save all the data for the file. The data has been lost. This error might be caused by a failure of your computer hardware or network connection. Try to save this file elsewhere.",
    "STATUS_LOST_WRITEBEHIND_DATA"
  ],
	3221226019: [
    "The parameters passed to the server in the client/server shared memory window were invalid. Too much data might have been put in the shared memory window.",
    "STATUS_CLIENT_SERVER_PARAMETERS_INVALID"
  ],
	3221226020: [
    "The user password must be changed before logging on the first time.",
    "STATUS_PASSWORD_MUST_CHANGE"
  ],
	3221226021: [
    "The object was not found.",
    "STATUS_NOT_FOUND"
  ],
	3221226022: [
    "The stream is not a tiny stream.",
    "STATUS_NOT_TINY_STREAM"
  ],
	3221226023: [
    "A transaction recovery failed.",
    "STATUS_RECOVERY_FAILURE"
  ],
	3221226024: [
    "The request must be handled by the stack overflow code.",
    "STATUS_STACK_OVERFLOW_READ"
  ],
	3221226025: [
    "A consistency check failed.",
    "STATUS_FAIL_CHECK"
  ],
	3221226026: [
    "The attempt to insert the ID in the index failed because the ID is already in the index.",
    "STATUS_DUPLICATE_OBJECTID"
  ],
	3221226027: [
    "The attempt to set the object ID failed because the object already has an ID.",
    "STATUS_OBJECTID_EXISTS"
  ],
	3221226028: [
    "Internal OFS status codes indicating how an allocation operation is handled. Either it is retried after the containing oNode is moved or the extent stream is converted to a large stream.",
    "STATUS_CONVERT_TO_LARGE"
  ],
	3221226029: [
    "The request needs to be retried.",
    "STATUS_RETRY"
  ],
	3221226030: [
    "The attempt to find the object found an object on the volume that matches by ID; however, it is out of the scope of the handle that is used for the operation.",
    "STATUS_FOUND_OUT_OF_SCOPE"
  ],
	3221226031: [
    "The bucket array must be grown. Retry the transaction after doing so.",
    "STATUS_ALLOCATE_BUCKET"
  ],
	3221226032: [
    "The specified property set does not exist on the object.",
    "STATUS_PROPSET_NOT_FOUND"
  ],
	3221226033: [
    "The user/kernel marshaling buffer has overflowed.",
    "STATUS_MARSHALL_OVERFLOW"
  ],
	3221226034: [
    "The supplied variant structure contains invalid data.",
    "STATUS_INVALID_VARIANT"
  ],
	3221226035: [
    "A domain controller for this domain was not found.",
    "STATUS_DOMAIN_CONTROLLER_NOT_FOUND"
  ],
	3221226036: [
    "The user account has been automatically locked because too many invalid logon attempts or password change attempts have been requested.",
    "STATUS_ACCOUNT_LOCKED_OUT"
  ],
	3221226037: [
    "NtClose was called on a handle that was protected from close via NtSetInformationObject.",
    "STATUS_HANDLE_NOT_CLOSABLE"
  ],
	3221226038: [
    "The transport-connection attempt was refused by the remote system.",
    "STATUS_CONNECTION_REFUSED"
  ],
	3221226039: [
    "The transport connection was gracefully closed.",
    "STATUS_GRACEFUL_DISCONNECT"
  ],
	3221226040: [
    "The transport endpoint already has an address associated with it.",
    "STATUS_ADDRESS_ALREADY_ASSOCIATED"
  ],
	3221226041: [
    "An address has not yet been associated with the transport endpoint.",
    "STATUS_ADDRESS_NOT_ASSOCIATED"
  ],
	3221226042: [
    "An operation was attempted on a nonexistent transport connection.",
    "STATUS_CONNECTION_INVALID"
  ],
	3221226043: [
    "An invalid operation was attempted on an active transport connection.",
    "STATUS_CONNECTION_ACTIVE"
  ],
	3221226044: [
    "The remote network is not reachable by the transport.",
    "STATUS_NETWORK_UNREACHABLE"
  ],
	3221226045: [
    "The remote system is not reachable by the transport.",
    "STATUS_HOST_UNREACHABLE"
  ],
	3221226046: [
    "The remote system does not support the transport protocol.",
    "STATUS_PROTOCOL_UNREACHABLE"
  ],
	3221226047: [
    "No service is operating at the destination port of the transport on the remote system.",
    "STATUS_PORT_UNREACHABLE"
  ],
	3221226048: [
    "The request was aborted.",
    "STATUS_REQUEST_ABORTED"
  ],
	3221226049: [
    "The transport connection was aborted by the local system.",
    "STATUS_CONNECTION_ABORTED"
  ],
	3221226050: [
    "The specified buffer contains ill-formed data.",
    "STATUS_BAD_COMPRESSION_BUFFER"
  ],
	3221226051: [
    "The requested operation cannot be performed on a file with a user mapped section open.",
    "STATUS_USER_MAPPED_FILE"
  ],
	3221226052: [
    "{Audit Failed} An attempt to generate a security audit failed.",
    "STATUS_AUDIT_FAILED"
  ],
	3221226053: [
    "The timer resolution was not previously set by the current process.",
    "STATUS_TIMER_RESOLUTION_NOT_SET"
  ],
	3221226054: [
    "A connection to the server could not be made because the limit on the number of concurrent connections for this account has been reached.",
    "STATUS_CONNECTION_COUNT_LIMIT"
  ],
	3221226055: [
    "Attempting to log on during an unauthorized time of day for this account.",
    "STATUS_LOGIN_TIME_RESTRICTION"
  ],
	3221226056: [
    "The account is not authorized to log on from this station.",
    "STATUS_LOGIN_WKSTA_RESTRICTION"
  ],
	3221226057: [
    "{UP/MP Image Mismatch} The image has been modified for use on a uniprocessor system, but you are running it on a multiprocessor machine. Reinstall the image file.",
    "STATUS_IMAGE_MP_UP_MISMATCH"
  ],
	3221226064: [
    "There is insufficient account information to log you on.",
    "STATUS_INSUFFICIENT_LOGON_INFO"
  ],
	3221226065: [
    "{Invalid DLL Entrypoint} The dynamic link library is not written correctly. The stack pointer has been left in an inconsistent state. The entry point should be declared as WINAPI or STDCALL. Select YES to fail the DLL load. Select NO to continue execution. Selecting NO might cause the application to operate incorrectly.",
    "STATUS_BAD_DLL_ENTRYPOINT"
  ],
	3221226066: [
    "{Invalid Service Callback Entrypoint} The service is not written correctly. The stack pointer has been left in an inconsistent state. The callback entry point should be declared as WINAPI or STDCALL. Selecting OK will cause the service to continue operation. However, the service process might operate incorrectly.",
    "STATUS_BAD_SERVICE_ENTRYPOINT"
  ],
	3221226067: [
    "The server received the messages but did not send a reply.",
    "STATUS_LPC_REPLY_LOST"
  ],
	3221226068: [
    "There is an IP address conflict with another system on the network.",
    "STATUS_IP_ADDRESS_CONFLICT1"
  ],
	3221226069: [
    "There is an IP address conflict with another system on the network.",
    "STATUS_IP_ADDRESS_CONFLICT2"
  ],
	3221226070: [
    "{Low On Registry Space} The system has reached the maximum size that is allowed for the system part of the registry. Additional storage requests will be ignored.",
    "STATUS_REGISTRY_QUOTA_LIMIT"
  ],
	3221226071: [
    "The contacted server does not support the indicated part of the DFS namespace.",
    "STATUS_PATH_NOT_COVERED"
  ],
	3221226072: [
    "A callback return system service cannot be executed when no callback is active.",
    "STATUS_NO_CALLBACK_ACTIVE"
  ],
	3221226073: [
    "The service being accessed is licensed for a particular number of connections. No more connections can be made to the service at this time because the service has already accepted the maximum number of connections.",
    "STATUS_LICENSE_QUOTA_EXCEEDED"
  ],
	3221226074: [
    "The password provided is too short to meet the policy of your user account. Choose a longer password.",
    "STATUS_PWD_TOO_SHORT"
  ],
	3221226075: [
    "The policy of your user account does not allow you to change passwords too frequently. This is done to prevent users from changing back to a familiar, but potentially discovered, password. If you feel your password has been compromised, contact your administrator immediately to have a new one assigned.",
    "STATUS_PWD_TOO_RECENT"
  ],
	3221226076: [
    "You have attempted to change your password to one that you have used in the past. The policy of your user account does not allow this. Select a password that you have not previously used.",
    "STATUS_PWD_HISTORY_CONFLICT"
  ],
	3221226078: [
    "You have attempted to load a legacy device driver while its device instance had been disabled.",
    "STATUS_PLUGPLAY_NO_DEVICE"
  ],
	3221226079: [
    "The specified compression format is unsupported.",
    "STATUS_UNSUPPORTED_COMPRESSION"
  ],
	3221226080: [
    "The specified hardware profile configuration is invalid.",
    "STATUS_INVALID_HW_PROFILE"
  ],
	3221226081: [
    "The specified Plug and Play registry device path is invalid.",
    "STATUS_INVALID_PLUGPLAY_DEVICE_PATH"
  ],
	3221226082: [
    "{Driver Entry Point Not Found} The device driver could not locate the ordinal in the driver.",
    "STATUS_DRIVER_ORDINAL_NOT_FOUND"
  ],
	3221226083: [
    "{Driver Entry Point Not Found} The device driver could not locate the entry point in the driver.",
    "STATUS_DRIVER_ENTRYPOINT_NOT_FOUND"
  ],
	3221226084: [
    "{Application Error} The application attempted to release a resource it did not own. Click OK to terminate the application.",
    "STATUS_RESOURCE_NOT_OWNED"
  ],
	3221226085: [
    "An attempt was made to create more links on a file than the file system supports.",
    "STATUS_TOO_MANY_LINKS"
  ],
	3221226086: [
    "The specified quota list is internally inconsistent with its descriptor.",
    "STATUS_QUOTA_LIST_INCONSISTENT"
  ],
	3221226087: [
    "The specified file has been relocated to offline storage.",
    "STATUS_FILE_IS_OFFLINE"
  ],
	3221226088: [
    "{Windows Evaluation Notification} The evaluation period for this installation of Windows has expired. This system will shutdown in 1 hour. To restore access to this installation of Windows, upgrade this installation by using a licensed distribution of this product.",
    "STATUS_EVALUATION_EXPIRATION"
  ],
	3221226089: [
    "{Illegal System DLL Relocation} The system DLL was relocated in memory. The application will not run properly. The relocation occurred because the DLL occupied an address range that is reserved for Windows system DLLs. The vendor supplying the DLL should be contacted for a new DLL.",
    "STATUS_ILLEGAL_DLL_RELOCATION"
  ],
	3221226090: [
    "{License Violation} The system has detected tampering with your registered product type. This is a violation of your software license. Tampering with the product type is not permitted.",
    "STATUS_LICENSE_VIOLATION"
  ],
	3221226091: [
    "{DLL Initialization Failed} The application failed to initialize because the window station is shutting down.",
    "STATUS_DLL_INIT_FAILED_LOGOFF"
  ],
	3221226092: [
    "{Unable to Load Device Driver} device driver could not be loaded.",
    "STATUS_DRIVER_UNABLE_TO_LOAD"
  ],
	3221226093: [
    "DFS is unavailable on the contacted server.",
    "STATUS_DFS_UNAVAILABLE"
  ],
	3221226094: [
    "An operation was attempted to a volume after it was dismounted.",
    "STATUS_VOLUME_DISMOUNTED"
  ],
	3221226095: [
    "An internal error occurred in the Win32 x86 emulation subsystem.",
    "STATUS_WX86_INTERNAL_ERROR"
  ],
	3221226096: [
    "Win32 x86 emulation subsystem floating-point stack check.",
    "STATUS_WX86_FLOAT_STACK_CHECK"
  ],
	3221226097: [
    "The validation process needs to continue on to the next step.",
    "STATUS_VALIDATE_CONTINUE"
  ],
	3221226098: [
    "There was no match for the specified key in the index.",
    "STATUS_NO_MATCH"
  ],
	3221226099: [
    "There are no more matches for the current index enumeration.",
    "STATUS_NO_MORE_MATCHES"
  ],
	3221226101: [
    "The NTFS file or directory is not a reparse point.",
    "STATUS_NOT_A_REPARSE_POINT"
  ],
	3221226102: [
    "The Windows I/O reparse tag passed for the NTFS reparse point is invalid.",
    "STATUS_IO_REPARSE_TAG_INVALID"
  ],
	3221226103: [
    "The Windows I/O reparse tag does not match the one that is in the NTFS reparse point.",
    "STATUS_IO_REPARSE_TAG_MISMATCH"
  ],
	3221226104: [
    "The user data passed for the NTFS reparse point is invalid.",
    "STATUS_IO_REPARSE_DATA_INVALID"
  ],
	3221226105: [
    "The layered file system driver for this I/O tag did not handle it when needed.",
    "STATUS_IO_REPARSE_TAG_NOT_HANDLED"
  ],
	3221226112: [
    "The NTFS symbolic link could not be resolved even though the initial file name is valid.",
    "STATUS_REPARSE_POINT_NOT_RESOLVED"
  ],
	3221226113: [
    "The NTFS directory is a reparse point.",
    "STATUS_DIRECTORY_IS_A_REPARSE_POINT"
  ],
	3221226114: [
    "The range could not be added to the range list because of a conflict.",
    "STATUS_RANGE_LIST_CONFLICT"
  ],
	3221226115: [
    "The specified medium changer source element contains no media.",
    "STATUS_SOURCE_ELEMENT_EMPTY"
  ],
	3221226116: [
    "The specified medium changer destination element already contains media.",
    "STATUS_DESTINATION_ELEMENT_FULL"
  ],
	3221226117: [
    "The specified medium changer element does not exist.",
    "STATUS_ILLEGAL_ELEMENT_ADDRESS"
  ],
	3221226118: [
    "The specified element is contained in a magazine that is no longer present.",
    "STATUS_MAGAZINE_NOT_PRESENT"
  ],
	3221226119: [
    "The device requires re-initialization due to hardware errors.",
    "STATUS_REINITIALIZATION_NEEDED"
  ],
	3221226122: [
    "The file encryption attempt failed.",
    "STATUS_ENCRYPTION_FAILED"
  ],
	3221226123: [
    "The file decryption attempt failed.",
    "STATUS_DECRYPTION_FAILED"
  ],
	3221226124: [
    "The specified range could not be found in the range list.",
    "STATUS_RANGE_NOT_FOUND"
  ],
	3221226125: [
    "There is no encryption recovery policy configured for this system.",
    "STATUS_NO_RECOVERY_POLICY"
  ],
	3221226126: [
    "The required encryption driver is not loaded for this system.",
    "STATUS_NO_EFS"
  ],
	3221226127: [
    "The file was encrypted with a different encryption driver than is currently loaded.",
    "STATUS_WRONG_EFS"
  ],
	3221226128: [
    "There are no EFS keys defined for the user.",
    "STATUS_NO_USER_KEYS"
  ],
	3221226129: [
    "The specified file is not encrypted.",
    "STATUS_FILE_NOT_ENCRYPTED"
  ],
	3221226130: [
    "The specified file is not in the defined EFS export format.",
    "STATUS_NOT_EXPORT_FORMAT"
  ],
	3221226131: [
    "The specified file is encrypted and the user does not have the ability to decrypt it.",
    "STATUS_FILE_ENCRYPTED"
  ],
	3221226133: [
    "The GUID passed was not recognized as valid by a WMI data provider.",
    "STATUS_WMI_GUID_NOT_FOUND"
  ],
	3221226134: [
    "The instance name passed was not recognized as valid by a WMI data provider.",
    "STATUS_WMI_INSTANCE_NOT_FOUND"
  ],
	3221226135: [
    "The data item ID passed was not recognized as valid by a WMI data provider.",
    "STATUS_WMI_ITEMID_NOT_FOUND"
  ],
	3221226136: [
    "The WMI request could not be completed and should be retried.",
    "STATUS_WMI_TRY_AGAIN"
  ],
	3221226137: [
    "The policy object is shared and can only be modified at the root.",
    "STATUS_SHARED_POLICY"
  ],
	3221226138: [
    "The policy object does not exist when it should.",
    "STATUS_POLICY_OBJECT_NOT_FOUND"
  ],
	3221226139: [
    "The requested policy information only lives in the Ds.",
    "STATUS_POLICY_ONLY_IN_DS"
  ],
	3221226140: [
    "The volume must be upgraded to enable this feature.",
    "STATUS_VOLUME_NOT_UPGRADED"
  ],
	3221226141: [
    "The remote storage service is not operational at this time.",
    "STATUS_REMOTE_STORAGE_NOT_ACTIVE"
  ],
	3221226142: [
    "The remote storage service encountered a media error.",
    "STATUS_REMOTE_STORAGE_MEDIA_ERROR"
  ],
	3221226143: [
    "The tracking (workstation) service is not running.",
    "STATUS_NO_TRACKING_SERVICE"
  ],
	3221226144: [
    "The server process is running under a SID that is different from the SID that is required by client.",
    "STATUS_SERVER_SID_MISMATCH"
  ],
	3221226145: [
    "The specified directory service attribute or value does not exist.",
    "STATUS_DS_NO_ATTRIBUTE_OR_VALUE"
  ],
	3221226146: [
    "The attribute syntax specified to the directory service is invalid.",
    "STATUS_DS_INVALID_ATTRIBUTE_SYNTAX"
  ],
	3221226147: [
    "The attribute type specified to the directory service is not defined.",
    "STATUS_DS_ATTRIBUTE_TYPE_UNDEFINED"
  ],
	3221226148: [
    "The specified directory service attribute or value already exists.",
    "STATUS_DS_ATTRIBUTE_OR_VALUE_EXISTS"
  ],
	3221226149: [
    "The directory service is busy.",
    "STATUS_DS_BUSY"
  ],
	3221226150: [
    "The directory service is unavailable.",
    "STATUS_DS_UNAVAILABLE"
  ],
	3221226151: [
    "The directory service was unable to allocate a relative identifier.",
    "STATUS_DS_NO_RIDS_ALLOCATED"
  ],
	3221226152: [
    "The directory service has exhausted the pool of relative identifiers.",
    "STATUS_DS_NO_MORE_RIDS"
  ],
	3221226153: [
    "The requested operation could not be performed because the directory service is not the master for that type of operation.",
    "STATUS_DS_INCORRECT_ROLE_OWNER"
  ],
	3221226154: [
    "The directory service was unable to initialize the subsystem that allocates relative identifiers.",
    "STATUS_DS_RIDMGR_INIT_ERROR"
  ],
	3221226155: [
    "The requested operation did not satisfy one or more constraints that are associated with the class of the object.",
    "STATUS_DS_OBJ_CLASS_VIOLATION"
  ],
	3221226156: [
    "The directory service can perform the requested operation only on a leaf object.",
    "STATUS_DS_CANT_ON_NON_LEAF"
  ],
	3221226157: [
    "The directory service cannot perform the requested operation on the Relatively Defined Name (RDN) attribute of an object.",
    "STATUS_DS_CANT_ON_RDN"
  ],
	3221226158: [
    "The directory service detected an attempt to modify the object class of an object.",
    "STATUS_DS_CANT_MOD_OBJ_CLASS"
  ],
	3221226159: [
    "An error occurred while performing a cross domain move operation.",
    "STATUS_DS_CROSS_DOM_MOVE_FAILED"
  ],
	3221226160: [
    "Unable to contact the global catalog server.",
    "STATUS_DS_GC_NOT_AVAILABLE"
  ],
	3221226161: [
    "The requested operation requires a directory service, and none was available.",
    "STATUS_DIRECTORY_SERVICE_REQUIRED"
  ],
	3221226162: [
    "The reparse attribute cannot be set because it is incompatible with an existing attribute.",
    "STATUS_REPARSE_ATTRIBUTE_CONFLICT"
  ],
	3221226163: [
    "A group marked \"use for deny only\" cannot be enabled.",
    "STATUS_CANT_ENABLE_DENY_ONLY"
  ],
	3221226164: [
    "{EXCEPTION} Multiple floating-point faults.",
    "STATUS_FLOAT_MULTIPLE_FAULTS"
  ],
	3221226165: [
    "{EXCEPTION} Multiple floating-point traps.",
    "STATUS_FLOAT_MULTIPLE_TRAPS"
  ],
	3221226166: [
    "The device has been removed.",
    "STATUS_DEVICE_REMOVED"
  ],
	3221226167: [
    "The volume change journal is being deleted.",
    "STATUS_JOURNAL_DELETE_IN_PROGRESS"
  ],
	3221226168: [
    "The volume change journal is not active.",
    "STATUS_JOURNAL_NOT_ACTIVE"
  ],
	3221226169: [
    "The requested interface is not supported.",
    "STATUS_NOINTERFACE"
  ],
	3221226177: [
    "A directory service resource limit has been exceeded.",
    "STATUS_DS_ADMIN_LIMIT_EXCEEDED"
  ],
	3221226178: [
    "{System Standby Failed} The driver does not support standby mode. Updating this driver allows the system to go to standby mode.",
    "STATUS_DRIVER_FAILED_SLEEP"
  ],
	3221226179: [
    "Mutual Authentication failed. The server password is out of date at the domain controller.",
    "STATUS_MUTUAL_AUTHENTICATION_FAILED"
  ],
	3221226180: [
    "The system file has become corrupt and has been replaced.",
    "STATUS_CORRUPT_SYSTEM_FILE"
  ],
	3221226181: [
    "{EXCEPTION} Alignment Error A data type misalignment error was detected in a load or store instruction.",
    "STATUS_DATATYPE_MISALIGNMENT_ERROR"
  ],
	3221226182: [
    "The WMI data item or data block is read-only.",
    "STATUS_WMI_READ_ONLY"
  ],
	3221226183: [
    "The WMI data item or data block could not be changed.",
    "STATUS_WMI_SET_FAILURE"
  ],
	3221226184: [
    "{Virtual Memory Minimum Too Low} Your system is low on virtual memory. Windows is increasing the size of your virtual memory paging file. During this process, memory requests for some applications might be denied. For more information, see Help.",
    "STATUS_COMMITMENT_MINIMUM"
  ],
	3221226185: [
    "{EXCEPTION} Register NaT consumption faults. A NaT value is consumed on a non-speculative instruction.",
    "STATUS_REG_NAT_CONSUMPTION"
  ],
	3221226186: [
    "The transport element of the medium changer contains media, which is causing the operation to fail.",
    "STATUS_TRANSPORT_FULL"
  ],
	3221226187: [
    "Security Accounts Manager initialization failed. Click OK to shut down this system and restart in Directory Services Restore Mode. Check the event log for more detailed information.",
    "STATUS_DS_SAM_INIT_FAILURE"
  ],
	3221226188: [
    "This operation is supported only when you are connected to the server.",
    "STATUS_ONLY_IF_CONNECTED"
  ],
	3221226189: [
    "Only an administrator can modify the membership list of an administrative group.",
    "STATUS_DS_SENSITIVE_GROUP_VIOLATION"
  ],
	3221226190: [
    "A device was removed so enumeration must be restarted.",
    "STATUS_PNP_RESTART_ENUMERATION"
  ],
	3221226191: [
    "The journal entry has been deleted from the journal.",
    "STATUS_JOURNAL_ENTRY_DELETED"
  ],
	3221226192: [
    "Cannot change the primary group ID of a domain controller account.",
    "STATUS_DS_CANT_MOD_PRIMARYGROUPID"
  ],
	3221226193: [
    "{Fatal System Error} The system image is not properly signed. The file has been replaced with the signed file. The system has been shut down.",
    "STATUS_SYSTEM_IMAGE_BAD_SIGNATURE"
  ],
	3221226194: [
    "The device will not start without a reboot.",
    "STATUS_PNP_REBOOT_REQUIRED"
  ],
	3221226195: [
    "The power state of the current device cannot support this request.",
    "STATUS_POWER_STATE_INVALID"
  ],
	3221226196: [
    "The specified group type is invalid.",
    "STATUS_DS_INVALID_GROUP_TYPE"
  ],
	3221226197: [
    "In a mixed domain, no nesting of a global group if the group is security enabled.",
    "STATUS_DS_NO_NEST_GLOBALGROUP_IN_MIXEDDOMAIN"
  ],
	3221226198: [
    "In a mixed domain, cannot nest local groups with other local groups, if the group is security enabled.",
    "STATUS_DS_NO_NEST_LOCALGROUP_IN_MIXEDDOMAIN"
  ],
	3221226199: [
    "A global group cannot have a local group as a member.",
    "STATUS_DS_GLOBAL_CANT_HAVE_LOCAL_MEMBER"
  ],
	3221226200: [
    "A global group cannot have a universal group as a member.",
    "STATUS_DS_GLOBAL_CANT_HAVE_UNIVERSAL_MEMBER"
  ],
	3221226201: [
    "A universal group cannot have a local group as a member.",
    "STATUS_DS_UNIVERSAL_CANT_HAVE_LOCAL_MEMBER"
  ],
	3221226202: [
    "A global group cannot have a cross-domain member.",
    "STATUS_DS_GLOBAL_CANT_HAVE_CROSSDOMAIN_MEMBER"
  ],
	3221226203: [
    "A local group cannot have another cross-domain local group as a member.",
    "STATUS_DS_LOCAL_CANT_HAVE_CROSSDOMAIN_LOCAL_MEMBER"
  ],
	3221226204: [
    "Cannot change to a security-disabled group because primary members are in this group.",
    "STATUS_DS_HAVE_PRIMARY_MEMBERS"
  ],
	3221226205: [
    "The WMI operation is not supported by the data block or method.",
    "STATUS_WMI_NOT_SUPPORTED"
  ],
	3221226206: [
    "There is not enough power to complete the requested operation.",
    "STATUS_INSUFFICIENT_POWER"
  ],
	3221226207: [
    "The Security Accounts Manager needs to get the boot password.",
    "STATUS_SAM_NEED_BOOTKEY_PASSWORD"
  ],
	3221226208: [
    "The Security Accounts Manager needs to get the boot key from the floppy disk.",
    "STATUS_SAM_NEED_BOOTKEY_FLOPPY"
  ],
	3221226209: [
    "The directory service cannot start.",
    "STATUS_DS_CANT_START"
  ],
	3221226210: [
    "The directory service could not start. Click OK to shut down this system and restart in Directory Services Restore Mode. Check the event log for more detailed information.",
    "STATUS_DS_INIT_FAILURE"
  ],
	3221226211: [
    "The Security Accounts Manager initialization failed. Click OK to shut down this system and restart in Safe Mode. Check the event log for more detailed information.",
    "STATUS_SAM_INIT_FAILURE"
  ],
	3221226212: [
    "The requested operation can be performed only on a global catalog server.",
    "STATUS_DS_GC_REQUIRED"
  ],
	3221226213: [
    "A local group can only be a member of other local groups in the same domain.",
    "STATUS_DS_LOCAL_MEMBER_OF_LOCAL_ONLY"
  ],
	3221226214: [
    "Foreign security principals cannot be members of universal groups.",
    "STATUS_DS_NO_FPO_IN_UNIVERSAL_GROUPS"
  ],
	3221226215: [
    "Your computer could not be joined to the domain. You have exceeded the maximum number of computer accounts you are allowed to create in this domain. Contact your system administrator to have this limit reset or increased.",
    "STATUS_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED"
  ],
	3221226217: [
    "This operation cannot be performed on the current domain.",
    "STATUS_CURRENT_DOMAIN_NOT_ALLOWED"
  ],
	3221226218: [
    "The directory or file cannot be created.",
    "STATUS_CANNOT_MAKE"
  ],
	3221226219: [
    "The system is in the process of shutting down.",
    "STATUS_SYSTEM_SHUTDOWN"
  ],
	3221226220: [
    "Directory Services could not start. Click OK to shut down the system. You can use the recovery console to diagnose the system further.",
    "STATUS_DS_INIT_FAILURE_CONSOLE"
  ],
	3221226221: [
    "Security Accounts Manager initialization failed. Click OK to shut down the system. You can use the recovery console to diagnose the system further.",
    "STATUS_DS_SAM_INIT_FAILURE_CONSOLE"
  ],
	3221226222: [
    "A security context was deleted before the context was completed. This is considered a logon failure.",
    "STATUS_UNFINISHED_CONTEXT_DELETED"
  ],
	3221226223: [
    "The client is trying to negotiate a context and the server requires user-to-user but did not send a TGT reply.",
    "STATUS_NO_TGT_REPLY"
  ],
	3221226224: [
    "An object ID was not found in the file.",
    "STATUS_OBJECTID_NOT_FOUND"
  ],
	3221226225: [
    "Unable to accomplish the requested task because the local machine does not have any IP addresses.",
    "STATUS_NO_IP_ADDRESSES"
  ],
	3221226226: [
    "The supplied credential handle does not match the credential that is associated with the security context.",
    "STATUS_WRONG_CREDENTIAL_HANDLE"
  ],
	3221226227: [
    "The crypto system or checksum function is invalid because a required function is unavailable.",
    "STATUS_CRYPTO_SYSTEM_INVALID"
  ],
	3221226228: [
    "The number of maximum ticket referrals has been exceeded.",
    "STATUS_MAX_REFERRALS_EXCEEDED"
  ],
	3221226229: [
    "The local machine must be a Kerberos KDC (domain controller) and it is not.",
    "STATUS_MUST_BE_KDC"
  ],
	3221226230: [
    "The other end of the security negotiation requires strong crypto but it is not supported on the local machine.",
    "STATUS_STRONG_CRYPTO_NOT_SUPPORTED"
  ],
	3221226231: [
    "The KDC reply contained more than one principal name.",
    "STATUS_TOO_MANY_PRINCIPALS"
  ],
	3221226232: [
    "Expected to find PA data for a hint of what etype to use, but it was not found.",
    "STATUS_NO_PA_DATA"
  ],
	3221226233: [
    "The client certificate does not contain a valid UPN, or does not match the client name in the logon request. Contact your administrator.",
    "STATUS_PKINIT_NAME_MISMATCH"
  ],
	3221226234: [
    "Smart card logon is required and was not used.",
    "STATUS_SMARTCARD_LOGON_REQUIRED"
  ],
	3221226235: [
    "An invalid request was sent to the KDC.",
    "STATUS_KDC_INVALID_REQUEST"
  ],
	3221226236: [
    "The KDC was unable to generate a referral for the service requested.",
    "STATUS_KDC_UNABLE_TO_REFER"
  ],
	3221226237: [
    "The encryption type requested is not supported by the KDC.",
    "STATUS_KDC_UNKNOWN_ETYPE"
  ],
	3221226238: [
    "A system shutdown is in progress.",
    "STATUS_SHUTDOWN_IN_PROGRESS"
  ],
	3221226239: [
    "The server machine is shutting down.",
    "STATUS_SERVER_SHUTDOWN_IN_PROGRESS"
  ],
	3221226240: [
    "This operation is not supported on a computer running Windows Server 2003 operating system for Small Business Server.",
    "STATUS_NOT_SUPPORTED_ON_SBS"
  ],
	3221226241: [
    "The WMI GUID is no longer available.",
    "STATUS_WMI_GUID_DISCONNECTED"
  ],
	3221226242: [
    "Collection or events for the WMI GUID is already disabled.",
    "STATUS_WMI_ALREADY_DISABLED"
  ],
	3221226243: [
    "Collection or events for the WMI GUID is already enabled.",
    "STATUS_WMI_ALREADY_ENABLED"
  ],
	3221226244: [
    "The master file table on the volume is too fragmented to complete this operation.",
    "STATUS_MFT_TOO_FRAGMENTED"
  ],
	3221226245: [
    "Copy protection failure.",
    "STATUS_COPY_PROTECTION_FAILURE"
  ],
	3221226246: [
    "Copy protection error—DVD CSS Authentication failed.",
    "STATUS_CSS_AUTHENTICATION_FAILURE"
  ],
	3221226247: [
    "Copy protection error—The specified sector does not contain a valid key.",
    "STATUS_CSS_KEY_NOT_PRESENT"
  ],
	3221226248: [
    "Copy protection error—DVD session key not established.",
    "STATUS_CSS_KEY_NOT_ESTABLISHED"
  ],
	3221226249: [
    "Copy protection error—The read failed because the sector is encrypted.",
    "STATUS_CSS_SCRAMBLED_SECTOR"
  ],
	3221226250: [
    "Copy protection error—The region of the specified DVD does not correspond to the region setting of the drive.",
    "STATUS_CSS_REGION_MISMATCH"
  ],
	3221226251: [
    "Copy protection error—The region setting of the drive might be permanent.",
    "STATUS_CSS_RESETS_EXHAUSTED"
  ],
	3221226272: [
    "The Kerberos protocol encountered an error while validating the KDC certificate during smart card logon. There is more information in the system event log.",
    "STATUS_PKINIT_FAILURE"
  ],
	3221226273: [
    "The Kerberos protocol encountered an error while attempting to use the smart card subsystem.",
    "STATUS_SMARTCARD_SUBSYSTEM_FAILURE"
  ],
	3221226274: [
    "The target server does not have acceptable Kerberos credentials.",
    "STATUS_NO_KERB_KEY"
  ],
	3221226320: [
    "The transport determined that the remote system is down.",
    "STATUS_HOST_DOWN"
  ],
	3221226321: [
    "An unsupported pre-authentication mechanism was presented to the Kerberos package.",
    "STATUS_UNSUPPORTED_PREAUTH"
  ],
	3221226322: [
    "The encryption algorithm that is used on the source file needs a bigger key buffer than the one that is used on the destination file.",
    "STATUS_EFS_ALG_BLOB_TOO_BIG"
  ],
	3221226323: [
    "An attempt to remove a processes DebugPort was made, but a port was not already associated with the process.",
    "STATUS_PORT_NOT_SET"
  ],
	3221226324: [
    "An attempt to do an operation on a debug port failed because the port is in the process of being deleted.",
    "STATUS_DEBUGGER_INACTIVE"
  ],
	3221226325: [
    "This version of Windows is not compatible with the behavior version of the directory forest, domain, or domain controller.",
    "STATUS_DS_VERSION_CHECK_FAILURE"
  ],
	3221226326: [
    "The specified event is currently not being audited.",
    "STATUS_AUDITING_DISABLED"
  ],
	3221226327: [
    "The machine account was created prior to Windows NT 4.0 operating system. The account needs to be recreated.",
    "STATUS_PRENT4_MACHINE_ACCOUNT"
  ],
	3221226328: [
    "An account group cannot have a universal group as a member.",
    "STATUS_DS_AG_CANT_HAVE_UNIVERSAL_MEMBER"
  ],
	3221226329: [
    "The specified image file did not have the correct format; it appears to be a 32-bit Windows image.",
    "STATUS_INVALID_IMAGE_WIN_32"
  ],
	3221226330: [
    "The specified image file did not have the correct format; it appears to be a 64-bit Windows image.",
    "STATUS_INVALID_IMAGE_WIN_64"
  ],
	3221226331: [
    "The client's supplied SSPI channel bindings were incorrect.",
    "STATUS_BAD_BINDINGS"
  ],
	3221226332: [
    "The client session has expired; so the client must re-authenticate to continue accessing the remote resources.",
    "STATUS_NETWORK_SESSION_EXPIRED"
  ],
	3221226333: [
    "The AppHelp dialog box canceled; thus preventing the application from starting.",
    "STATUS_APPHELP_BLOCK"
  ],
	3221226334: [
    "The SID filtering operation removed all SIDs.",
    "STATUS_ALL_SIDS_FILTERED"
  ],
	3221226335: [
    "The driver was not loaded because the system is starting in safe mode.",
    "STATUS_NOT_SAFE_MODE_DRIVER"
  ],
	3221226337: [
    "Access has been restricted by your Administrator by the default software restriction policy level.",
    "STATUS_ACCESS_DISABLED_BY_POLICY_DEFAULT"
  ],
	3221226338: [
    "Access has been restricted by your Administrator by location with policy rule.",
    "STATUS_ACCESS_DISABLED_BY_POLICY_PATH"
  ],
	3221226339: [
    "Access has been restricted by your Administrator by software publisher policy.",
    "STATUS_ACCESS_DISABLED_BY_POLICY_PUBLISHER"
  ],
	3221226340: [
    "Access has been restricted by your Administrator by policy rule.",
    "STATUS_ACCESS_DISABLED_BY_POLICY_OTHER"
  ],
	3221226341: [
    "The driver was not loaded because it failed its initialization call.",
    "STATUS_FAILED_DRIVER_ENTRY"
  ],
	3221226342: [
    "The device encountered an error while applying power or reading the device configuration. This might be caused by a failure of your hardware or by a poor connection.",
    "STATUS_DEVICE_ENUMERATION_ERROR"
  ],
	3221226344: [
    "The create operation failed because the name contained at least one mount point that resolves to a volume to which the specified device object is not attached.",
    "STATUS_MOUNT_POINT_NOT_RESOLVED"
  ],
	3221226345: [
    "The device object parameter is either not a valid device object or is not attached to the volume that is specified by the file name.",
    "STATUS_INVALID_DEVICE_OBJECT_PARAMETER"
  ],
	3221226346: [
    "A machine check error has occurred. Check the system event log for additional information.",
    "STATUS_MCA_OCCURED"
  ],
	3221226347: [
    "Driver has been blocked from loading.",
    "STATUS_DRIVER_BLOCKED_CRITICAL"
  ],
	3221226348: [
    "Driver has been blocked from loading.",
    "STATUS_DRIVER_BLOCKED"
  ],
	3221226349: [
    "There was error processing the driver database.",
    "STATUS_DRIVER_DATABASE_ERROR"
  ],
	3221226350: [
    "System hive size has exceeded its limit.",
    "STATUS_SYSTEM_HIVE_TOO_LARGE"
  ],
	3221226351: [
    "A dynamic link library (DLL) referenced a module that was neither a DLL nor the process's executable image.",
    "STATUS_INVALID_IMPORT_OF_NON_DLL"
  ],
	3221226353: [
    "The local account store does not contain secret material for the specified account.",
    "STATUS_NO_SECRETS"
  ],
	3221226354: [
    "Access has been restricted by your Administrator by policy rule.",
    "STATUS_ACCESS_DISABLED_NO_SAFER_UI_BY_POLICY"
  ],
	3221226355: [
    "The system was not able to allocate enough memory to perform a stack switch.",
    "STATUS_FAILED_STACK_SWITCH"
  ],
	3221226356: [
    "A heap has been corrupted.",
    "STATUS_HEAP_CORRUPTION"
  ],
	3221226368: [
    "An incorrect PIN was presented to the smart card.",
    "STATUS_SMARTCARD_WRONG_PIN"
  ],
	3221226369: [
    "The smart card is blocked.",
    "STATUS_SMARTCARD_CARD_BLOCKED"
  ],
	3221226370: [
    "No PIN was presented to the smart card.",
    "STATUS_SMARTCARD_CARD_NOT_AUTHENTICATED"
  ],
	3221226371: [
    "No smart card is available.",
    "STATUS_SMARTCARD_NO_CARD"
  ],
	3221226372: [
    "The requested key container does not exist on the smart card.",
    "STATUS_SMARTCARD_NO_KEY_CONTAINER"
  ],
	3221226373: [
    "The requested certificate does not exist on the smart card.",
    "STATUS_SMARTCARD_NO_CERTIFICATE"
  ],
	3221226374: [
    "The requested keyset does not exist.",
    "STATUS_SMARTCARD_NO_KEYSET"
  ],
	3221226375: [
    "A communication error with the smart card has been detected.",
    "STATUS_SMARTCARD_IO_ERROR"
  ],
	3221226376: [
    "The system detected a possible attempt to compromise security. Ensure that you can contact the server that authenticated you.",
    "STATUS_DOWNGRADE_DETECTED"
  ],
	3221226377: [
    "The smart card certificate used for authentication has been revoked. Contact your system administrator. There might be additional information in the event log.",
    "STATUS_SMARTCARD_CERT_REVOKED"
  ],
	3221226378: [
    "An untrusted certificate authority was detected while processing the smart card certificate that is used for authentication. Contact your system administrator.",
    "STATUS_ISSUING_CA_UNTRUSTED"
  ],
	3221226379: [
    "The revocation status of the smart card certificate that is used for authentication could not be determined. Contact your system administrator.",
    "STATUS_REVOCATION_OFFLINE_C"
  ],
	3221226380: [
    "The smart card certificate used for authentication was not trusted. Contact your system administrator.",
    "STATUS_PKINIT_CLIENT_FAILURE"
  ],
	3221226381: [
    "The smart card certificate used for authentication has expired. Contact your system administrator.",
    "STATUS_SMARTCARD_CERT_EXPIRED"
  ],
	3221226382: [
    "The driver could not be loaded because a previous version of the driver is still in memory.",
    "STATUS_DRIVER_FAILED_PRIOR_UNLOAD"
  ],
	3221226383: [
    "The smart card provider could not perform the action because the context was acquired as silent.",
    "STATUS_SMARTCARD_SILENT_CONTEXT"
  ],
	3221226497: [
    "The delegated trust creation quota of the current user has been exceeded.",
    "STATUS_PER_USER_TRUST_QUOTA_EXCEEDED"
  ],
	3221226498: [
    "The total delegated trust creation quota has been exceeded.",
    "STATUS_ALL_USER_TRUST_QUOTA_EXCEEDED"
  ],
	3221226499: [
    "The delegated trust deletion quota of the current user has been exceeded.",
    "STATUS_USER_DELETE_TRUST_QUOTA_EXCEEDED"
  ],
	3221226500: [
    "The requested name already exists as a unique identifier.",
    "STATUS_DS_NAME_NOT_UNIQUE"
  ],
	3221226501: [
    "The requested object has a non-unique identifier and cannot be retrieved.",
    "STATUS_DS_DUPLICATE_ID_FOUND"
  ],
	3221226502: [
    "The group cannot be converted due to attribute restrictions on the requested group type.",
    "STATUS_DS_GROUP_CONVERSION_ERROR"
  ],
	3221226503: [
    "{Volume Shadow Copy Service} Wait while the Volume Shadow Copy Service prepares volume for hibernation.",
    "STATUS_VOLSNAP_PREPARE_HIBERNATE"
  ],
	3221226504: [
    "Kerberos sub-protocol User2User is required.",
    "STATUS_USER2USER_REQUIRED"
  ],
	3221226505: [
    "The system detected an overrun of a stack-based buffer in this application. This overrun could potentially allow a malicious user to gain control of this application.",
    "STATUS_STACK_BUFFER_OVERRUN"
  ],
	3221226506: [
    "The Kerberos subsystem encountered an error. A service for user protocol request was made against a domain controller which does not support service for user.",
    "STATUS_NO_S4U_PROT_SUPPORT"
  ],
	3221226507: [
    "An attempt was made by this server to make a Kerberos constrained delegation request for a target that is outside the server realm. This action is not supported and the resulting error indicates a misconfiguration on the allowed-to-delegate-to list for this server. Contact your administrator.",
    "STATUS_CROSSREALM_DELEGATION_FAILURE"
  ],
	3221226508: [
    "The revocation status of the domain controller certificate used for smart card authentication could not be determined. There is additional information in the system event log. Contact your system administrator.",
    "STATUS_REVOCATION_OFFLINE_KDC"
  ],
	3221226509: [
    "An untrusted certificate authority was detected while processing the domain controller certificate used for authentication. There is additional information in the system event log. Contact your system administrator.",
    "STATUS_ISSUING_CA_UNTRUSTED_KDC"
  ],
	3221226510: [
    "The domain controller certificate used for smart card logon has expired. Contact your system administrator with the contents of your system event log.",
    "STATUS_KDC_CERT_EXPIRED"
  ],
	3221226511: [
    "The domain controller certificate used for smart card logon has been revoked. Contact your system administrator with the contents of your system event log.",
    "STATUS_KDC_CERT_REVOKED"
  ],
	3221226512: [
    "Data present in one of the parameters is more than the function can operate on.",
    "STATUS_PARAMETER_QUOTA_EXCEEDED"
  ],
	3221226513: [
    "The system has failed to hibernate. Hibernation will be disabled until the system is restarted.",
    "STATUS_HIBERNATION_FAILURE"
  ],
	3221226514: [
    "An attempt to delay-load a .dll or get a function address in a delay-loaded .dll failed.",
    "STATUS_DELAY_LOAD_FAILED"
  ],
	3221226515: [
    "Logon Failure: The machine you are logging onto is protected by an authentication firewall. The specified account is not allowed to authenticate to the machine.",
    "STATUS_AUTHENTICATION_FIREWALL_FAILED"
  ],
	3221226516: [
    "16-bit application. You do not have permissions to execute 16-bit applications. Check your permissions with your system administrator.",
    "STATUS_VDM_DISALLOWED"
  ],
	3221226517: [
    "{Display Driver Stopped Responding} The display driver has stopped working normally. Save your work and reboot the system to restore full display functionality. The next time you reboot the machine a dialog will be displayed giving you a chance to report this failure to Microsoft.",
    "STATUS_HUNG_DISPLAY_DRIVER_THREAD"
  ],
	3221226518: [
    "The Desktop heap encountered an error while allocating session memory. There is more information in the system event log.",
    "STATUS_INSUFFICIENT_RESOURCE_FOR_SPECIFIED_SHARED_SECTION_SIZE"
  ],
	3221226519: [
    "An invalid parameter was passed to a C runtime function.",
    "STATUS_INVALID_CRUNTIME_PARAMETER"
  ],
	3221226520: [
    "The authentication failed because NTLM was blocked.",
    "STATUS_NTLM_BLOCKED"
  ],
	3221226521: [
    "The source object's SID already exists in destination forest.",
    "STATUS_DS_SRC_SID_EXISTS_IN_FOREST"
  ],
	3221226522: [
    "The domain name of the trusted domain already exists in the forest.",
    "STATUS_DS_DOMAIN_NAME_EXISTS_IN_FOREST"
  ],
	3221226523: [
    "The flat name of the trusted domain already exists in the forest.",
    "STATUS_DS_FLAT_NAME_EXISTS_IN_FOREST"
  ],
	3221226524: [
    "The User Principal Name (UPN) is invalid.",
    "STATUS_INVALID_USER_PRINCIPAL_NAME"
  ],
	3221226528: [
    "There has been an assertion failure.",
    "STATUS_ASSERTION_FAILURE"
  ],
	3221226529: [
    "Application verifier has found an error in the current process.",
    "STATUS_VERIFIER_STOP"
  ],
	3221226531: [
    "A user mode unwind is in progress.",
    "STATUS_CALLBACK_POP_STACK"
  ],
	3221226532: [
    "Blocked from loading due to incompatibility with this system. Contact your software vendor for a compatible version of the driver.",
    "STATUS_INCOMPATIBLE_DRIVER_BLOCKED"
  ],
	3221226533: [
    "Illegal operation attempted on a registry key which has already been unloaded.",
    "STATUS_HIVE_UNLOADED"
  ],
	3221226534: [
    "Compression is disabled for this volume.",
    "STATUS_COMPRESSION_DISABLED"
  ],
	3221226535: [
    "The requested operation could not be completed due to a file system limitation.",
    "STATUS_FILE_SYSTEM_LIMITATION"
  ],
	3221226536: [
    "The hash for image cannot be found in the system catalogs. The image is likely corrupt or the victim of tampering.",
    "STATUS_INVALID_IMAGE_HASH"
  ],
	3221226537: [
    "The implementation is not capable of performing the request.",
    "STATUS_NOT_CAPABLE"
  ],
	3221226538: [
    "The requested operation is out of order with respect to other operations.",
    "STATUS_REQUEST_OUT_OF_SEQUENCE"
  ],
	3221226539: [
    "An operation attempted to exceed an implementation-defined limit.",
    "STATUS_IMPLEMENTATION_LIMIT"
  ],
	3221226540: [
    "The requested operation requires elevation.",
    "STATUS_ELEVATION_REQUIRED"
  ],
	3221226541: [
    "The required security context does not exist.",
    "STATUS_NO_SECURITY_CONTEXT"
  ],
	3221226542: [
    "The PKU2U protocol encountered an error while attempting to utilize the associated certificates.",
    "STATUS_PKU2U_CERT_FAILURE"
  ],
	3221226546: [
    "The operation was attempted beyond the valid data length of the file.",
    "STATUS_BEYOND_VDL"
  ],
	3221226547: [
    "The attempted write operation encountered a write already in progress for some portion of the range.",
    "STATUS_ENCOUNTERED_WRITE_IN_PROGRESS"
  ],
	3221226548: [
    "The page fault mappings changed in the middle of processing a fault so the operation must be retried.",
    "STATUS_PTE_CHANGED"
  ],
	3221226549: [
    "The attempt to purge this file from memory failed to purge some or all the data from memory.",
    "STATUS_PURGE_FAILED"
  ],
	3221226560: [
    "The requested credential requires confirmation.",
    "STATUS_CRED_REQUIRES_CONFIRMATION"
  ],
	3221226561: [
    "The remote server sent an invalid response for a file being opened with Client Side Encryption.",
    "STATUS_CS_ENCRYPTION_INVALID_SERVER_RESPONSE"
  ],
	3221226562: [
    "Client Side Encryption is not supported by the remote server even though it claims to support it.",
    "STATUS_CS_ENCRYPTION_UNSUPPORTED_SERVER"
  ],
	3221226563: [
    "File is encrypted and should be opened in Client Side Encryption mode.",
    "STATUS_CS_ENCRYPTION_EXISTING_ENCRYPTED_FILE"
  ],
	3221226564: [
    "A new encrypted file is being created and a $EFS needs to be provided.",
    "STATUS_CS_ENCRYPTION_NEW_ENCRYPTED_FILE"
  ],
	3221226565: [
    "The SMB client requested a CSE FSCTL on a non-CSE file.",
    "STATUS_CS_ENCRYPTION_FILE_NOT_CSE"
  ],
	3221226566: [
    "Indicates a particular Security ID cannot be assigned as the label of an object.",
    "STATUS_INVALID_LABEL"
  ],
	3221226576: [
    "The process hosting the driver for this device has terminated.",
    "STATUS_DRIVER_PROCESS_TERMINATED"
  ],
	3221226577: [
    "The requested system device cannot be identified due to multiple indistinguishable devices potentially matching the identification criteria.",
    "STATUS_AMBIGUOUS_SYSTEM_DEVICE"
  ],
	3221226578: [
    "The requested system device cannot be found.",
    "STATUS_SYSTEM_DEVICE_NOT_FOUND"
  ],
	3221226579: [
    "This boot application must be restarted.",
    "STATUS_RESTART_BOOT_APPLICATION"
  ],
	3221226580: [
    "Insufficient NVRAM resources exist to complete the API.  A reboot might be required.",
    "STATUS_INSUFFICIENT_NVRAM_RESOURCES"
  ],
	3221226592: [
    "No ranges for the specified operation were able to be processed.",
    "STATUS_NO_RANGES_PROCESSED"
  ],
	3221226595: [
    "The storage device does not support Offload Write.",
    "STATUS_DEVICE_FEATURE_NOT_SUPPORTED"
  ],
	3221226596: [
    "Data cannot be moved because the source device cannot communicate with the destination device.",
    "STATUS_DEVICE_UNREACHABLE"
  ],
	3221226597: [
    "The token representing the data is invalid or expired.",
    "STATUS_INVALID_TOKEN"
  ],
	3221226598: [
    "The file server is temporarily unavailable.",
    "STATUS_SERVER_UNAVAILABLE"
  ],
	3221226599: [
    "The file is temporarily unavailable.",
    "STATUS_FILE_NOT_AVAILABLE"
  ],
	3221226624: [
    "The share is temporarily unavailable.",
    "STATUS_SHARE_UNAVAILABLE"
  ],
	3221226752: [
    "The specified task name is invalid.",
    "STATUS_INVALID_TASK_NAME"
  ],
	3221226753: [
    "The specified task index is invalid.",
    "STATUS_INVALID_TASK_INDEX"
  ],
	3221226754: [
    "The specified thread is already joining a task.",
    "STATUS_THREAD_ALREADY_IN_TASK"
  ],
	3221226755: [
    "A callback has requested to bypass native code.",
    "STATUS_CALLBACK_BYPASS"
  ],
	3221227010: [
    "A fail fast exception occurred. Exception handlers will not be invoked and the process will be terminated immediately.",
    "STATUS_FAIL_FAST_EXCEPTION"
  ],
	3221227011: [
    "Windows cannot verify the digital signature for this file. The signing certificate for this file has been revoked.",
    "STATUS_IMAGE_CERT_REVOKED"
  ],
	3221227264: [
    "The ALPC port is closed.",
    "STATUS_PORT_CLOSED"
  ],
	3221227265: [
    "The ALPC message requested is no longer available.",
    "STATUS_MESSAGE_LOST"
  ],
	3221227266: [
    "The ALPC message supplied is invalid.",
    "STATUS_INVALID_MESSAGE"
  ],
	3221227267: [
    "The ALPC message has been canceled.",
    "STATUS_REQUEST_CANCELED"
  ],
	3221227268: [
    "Invalid recursive dispatch attempt.",
    "STATUS_RECURSIVE_DISPATCH"
  ],
	3221227269: [
    "No receive buffer has been supplied in a synchronous request.",
    "STATUS_LPC_RECEIVE_BUFFER_EXPECTED"
  ],
	3221227270: [
    "The connection port is used in an invalid context.",
    "STATUS_LPC_INVALID_CONNECTION_USAGE"
  ],
	3221227271: [
    "The ALPC port does not accept new request messages.",
    "STATUS_LPC_REQUESTS_NOT_ALLOWED"
  ],
	3221227272: [
    "The resource requested is already in use.",
    "STATUS_RESOURCE_IN_USE"
  ],
	3221227273: [
    "The hardware has reported an uncorrectable memory error.",
    "STATUS_HARDWARE_MEMORY_ERROR"
  ],
	3221227274: [
    "Status {address} was returned, waiting on handle {address} for wait {address}, in waiter {address}.",
    "STATUS_THREADPOOL_HANDLE_EXCEPTION"
  ],
	3221227275: [
    "After a callback to {address}, a completion call to Set event failed.",
    "STATUS_THREADPOOL_SET_EVENT_ON_COMPLETION_FAILED"
  ],
	3221227276: [
    "After a callback to {address}, a completion call to ReleaseSemaphore failed.",
    "STATUS_THREADPOOL_RELEASE_SEMAPHORE_ON_COMPLETION_FAILED"
  ],
	3221227277: [
    "After a callback to {address}, a completion call to ReleaseMutex failed.",
    "STATUS_THREADPOOL_RELEASE_MUTEX_ON_COMPLETION_FAILED"
  ],
	3221227278: [
    "After a callback to {address}, a completion call to FreeLibrary failed.",
    "STATUS_THREADPOOL_FREE_LIBRARY_ON_COMPLETION_FAILED"
  ],
	3221227279: [
    "The thread pool was released while a thread was posting a callback to it.",
    "STATUS_THREADPOOL_RELEASED_DURING_OPERATION"
  ],
	3221227280: [
    "A thread pool worker thread is impersonating a client, after a callback to {address}. This is unexpected, indicating that the callback is missing a call to revert the impersonation.",
    "STATUS_CALLBACK_RETURNED_WHILE_IMPERSONATING"
  ],
	3221227281: [
    "A thread pool worker thread is impersonating a client, after executing an APC. This is unexpected, indicating that the APC is missing a call to revert the impersonation.",
    "STATUS_APC_RETURNED_WHILE_IMPERSONATING"
  ],
	3221227282: [
    "Either the target process, or the target thread's containing process, is a protected process.",
    "STATUS_PROCESS_IS_PROTECTED"
  ],
	3221227283: [
    "A thread is getting dispatched with MCA EXCEPTION because of MCA.",
    "STATUS_MCA_EXCEPTION"
  ],
	3221227284: [
    "The client certificate account mapping is not unique.",
    "STATUS_CERTIFICATE_MAPPING_NOT_UNIQUE"
  ],
	3221227285: [
    "The symbolic link cannot be followed because its type is disabled.",
    "STATUS_SYMLINK_CLASS_DISABLED"
  ],
	3221227286: [
    "Indicates that the specified string is not valid for IDN normalization.",
    "STATUS_INVALID_IDN_NORMALIZATION"
  ],
	3221227287: [
    "No mapping for the Unicode character exists in the target multi-byte code page.",
    "STATUS_NO_UNICODE_TRANSLATION"
  ],
	3221227288: [
    "The provided callback is already registered.",
    "STATUS_ALREADY_REGISTERED"
  ],
	3221227289: [
    "The provided context did not match the target.",
    "STATUS_CONTEXT_MISMATCH"
  ],
	3221227290: [
    "The specified port already has a completion list.",
    "STATUS_PORT_ALREADY_HAS_COMPLETION_LIST"
  ],
	3221227291: [
    "A threadpool worker thread entered a callback at thread base priority and exited at priority.",
    "STATUS_CALLBACK_RETURNED_THREAD_PRIORITY"
  ],
	3221227292: [
    "An invalid thread, handle, is specified for this operation. Possibly, a threadpool worker thread was specified.",
    "STATUS_INVALID_THREAD"
  ],
	3221227293: [
    "A threadpool worker thread entered a callback, which left transaction state.",
    "STATUS_CALLBACK_RETURNED_TRANSACTION"
  ],
	3221227294: [
    "A threadpool worker thread entered a callback, which left the loader lock held.",
    "STATUS_CALLBACK_RETURNED_LDR_LOCK"
  ],
	3221227295: [
    "A threadpool worker thread entered a callback, which left with preferred languages set.",
    "STATUS_CALLBACK_RETURNED_LANG"
  ],
	3221227296: [
    "A threadpool worker thread entered a callback, which left with background priorities set.",
    "STATUS_CALLBACK_RETURNED_PRI_BACK"
  ],
	3221227297: [
    "A threadpool worker thread entered a callback at thread affinity and exited.",
    "STATUS_CALLBACK_RETURNED_THREAD_AFFINITY"
  ],
	3221227520: [
    "The attempted operation required self healing to be enabled.",
    "STATUS_DISK_REPAIR_DISABLED"
  ],
	3221227521: [
    "The directory service cannot perform the requested operation because a domain rename operation is in progress.",
    "STATUS_DS_DOMAIN_RENAME_IN_PROGRESS"
  ],
	3221227522: [
    "An operation failed because the storage quota was exceeded.",
    "STATUS_DISK_QUOTA_EXCEEDED"
  ],
	3221227524: [
    "An operation failed because the content was blocked.",
    "STATUS_CONTENT_BLOCKED"
  ],
	3221227525: [
    "The operation could not be completed due to bad clusters on disk.",
    "STATUS_BAD_CLUSTERS"
  ],
	3221227526: [
    "The operation could not be completed because the volume is dirty. Please run the Chkdsk utility and try again. ",
    "STATUS_VOLUME_DIRTY"
  ],
	3221227777: [
    "This file is checked out or locked for editing by another user.",
    "STATUS_FILE_CHECKED_OUT"
  ],
	3221227778: [
    "The file must be checked out before saving changes.",
    "STATUS_CHECKOUT_REQUIRED"
  ],
	3221227779: [
    "The file type being saved or retrieved has been blocked.",
    "STATUS_BAD_FILE_TYPE"
  ],
	3221227780: [
    "The file size exceeds the limit allowed and cannot be saved.",
    "STATUS_FILE_TOO_LARGE"
  ],
	3221227781: [
    "Access Denied. Before opening files in this location, you must first browse to the e.g. site and select the option to log on automatically.",
    "STATUS_FORMS_AUTH_REQUIRED"
  ],
	3221227782: [
    "The operation did not complete successfully because the file contains a virus.",
    "STATUS_VIRUS_INFECTED"
  ],
	3221227783: [
    "This file contains a virus and cannot be opened. Due to the nature of this virus, the file has been removed from this location.",
    "STATUS_VIRUS_DELETED"
  ],
	3221227784: [
    "The resources required for this device conflict with the MCFG table.",
    "STATUS_BAD_MCFG_TABLE"
  ],
	3221227785: [
    "The operation did not complete successfully because it would cause an oplock to be broken. The caller has requested that existing oplocks not be broken.",
    "STATUS_CANNOT_BREAK_OPLOCK"
  ],
	3221264536: [
    "WOW Assertion Error.",
    "STATUS_WOW_ASSERTION"
  ],
	3221266432: [
    "The cryptographic signature is invalid.",
    "STATUS_INVALID_SIGNATURE"
  ],
	3221266433: [
    "The cryptographic provider does not support HMAC.",
    "STATUS_HMAC_NOT_SUPPORTED"
  ],
	3221266448: [
    "The IPsec queue overflowed.",
    "STATUS_IPSEC_QUEUE_OVERFLOW"
  ],
	3221266449: [
    "The neighbor discovery queue overflowed.",
    "STATUS_ND_QUEUE_OVERFLOW"
  ],
	3221266450: [
    "An Internet Control Message Protocol (ICMP) hop limit exceeded error was received.",
    "STATUS_HOPLIMIT_EXCEEDED"
  ],
	3221266451: [
    "The protocol is not installed on the local machine.",
    "STATUS_PROTOCOL_NOT_SUPPORTED"
  ],
	3221266560: [
    "{Delayed Write Failed} Windows was unable to save all the data for the file; the data has been lost. This error might be caused by network connectivity issues. Try to save this file elsewhere.",
    "STATUS_LOST_WRITEBEHIND_DATA_NETWORK_DISCONNECTED"
  ],
	3221266561: [
    "{Delayed Write Failed} Windows was unable to save all the data for the file; the data has been lost. This error was returned by the server on which the file exists. Try to save this file elsewhere.",
    "STATUS_LOST_WRITEBEHIND_DATA_NETWORK_SERVER_ERROR"
  ],
	3221266562: [
    "{Delayed Write Failed} Windows was unable to save all the data for the file; the data has been lost. This error might be caused if the device has been removed or the media is write-protected.",
    "STATUS_LOST_WRITEBEHIND_DATA_LOCAL_DISK_ERROR"
  ],
	3221266563: [
    "Windows was unable to parse the requested XML data.",
    "STATUS_XML_PARSE_ERROR"
  ],
	3221266564: [
    "An error was encountered while processing an XML digital signature.",
    "STATUS_XMLDSIG_ERROR"
  ],
	3221266565: [
    "This indicates that the caller made the connection request in the wrong routing compartment.",
    "STATUS_WRONG_COMPARTMENT"
  ],
	3221266566: [
    "This indicates that there was an AuthIP failure when attempting to connect to the remote host.",
    "STATUS_AUTHIP_FAILURE"
  ],
	3221266567: [
    "OID mapped groups cannot have members.",
    "STATUS_DS_OID_MAPPED_GROUP_CANT_HAVE_MEMBERS"
  ],
	3221266568: [
    "The specified OID cannot be found.",
    "STATUS_DS_OID_NOT_FOUND"
  ],
	3221266688: [
    "Hash generation for the specified version and hash type is not enabled on server.",
    "STATUS_HASH_NOT_SUPPORTED"
  ],
	3221266689: [
    "The hash requests is not present or not up to date with the current file contents.",
    "STATUS_HASH_NOT_PRESENT"
  ],
	3221267105: [
    "A file system filter on the server has not opted in for Offload Read support.",
    "STATUS_OFFLOAD_READ_FLT_NOT_SUPPORTED"
  ],
	3221267106: [
    "A file system filter on the server has not opted in for Offload Write support.",
    "STATUS_OFFLOAD_WRITE_FLT_NOT_SUPPORTED"
  ],
	3221267107: [
    "Offload read operations cannot be performed on:",
    "STATUS_OFFLOAD_READ_FILE_NOT_SUPPORTED"
  ],
	3221267108: [
    "Offload write operations cannot be performed on:",
    "STATUS_OFFLOAD_WRITE_FILE_NOT_SUPPORTED"
  ],
	3221291009: [
    "The debugger did not perform a state change.",
    "DBG_NO_STATE_CHANGE"
  ],
	3221291010: [
    "The debugger found that the application is not idle.",
    "DBG_APP_NOT_IDLE"
  ],
	3221356545: [
    "The string binding is invalid.",
    "RPC_NT_INVALID_STRING_BINDING"
  ],
	3221356546: [
    "The binding handle is not the correct type.",
    "RPC_NT_WRONG_KIND_OF_BINDING"
  ],
	3221356547: [
    "The binding handle is invalid.",
    "RPC_NT_INVALID_BINDING"
  ],
	3221356548: [
    "The RPC protocol sequence is not supported.",
    "RPC_NT_PROTSEQ_NOT_SUPPORTED"
  ],
	3221356549: [
    "The RPC protocol sequence is invalid.",
    "RPC_NT_INVALID_RPC_PROTSEQ"
  ],
	3221356550: [
    "The string UUID is invalid.",
    "RPC_NT_INVALID_STRING_UUID"
  ],
	3221356551: [
    "The endpoint format is invalid.",
    "RPC_NT_INVALID_ENDPOINT_FORMAT"
  ],
	3221356552: [
    "The network address is invalid.",
    "RPC_NT_INVALID_NET_ADDR"
  ],
	3221356553: [
    "No endpoint was found.",
    "RPC_NT_NO_ENDPOINT_FOUND"
  ],
	3221356554: [
    "The time-out value is invalid.",
    "RPC_NT_INVALID_TIMEOUT"
  ],
	3221356555: [
    "The object UUID was not found.",
    "RPC_NT_OBJECT_NOT_FOUND"
  ],
	3221356556: [
    "The object UUID has already been registered.",
    "RPC_NT_ALREADY_REGISTERED"
  ],
	3221356557: [
    "The type UUID has already been registered.",
    "RPC_NT_TYPE_ALREADY_REGISTERED"
  ],
	3221356558: [
    "The RPC server is already listening.",
    "RPC_NT_ALREADY_LISTENING"
  ],
	3221356559: [
    "No protocol sequences have been registered.",
    "RPC_NT_NO_PROTSEQS_REGISTERED"
  ],
	3221356560: [
    "The RPC server is not listening.",
    "RPC_NT_NOT_LISTENING"
  ],
	3221356561: [
    "The manager type is unknown.",
    "RPC_NT_UNKNOWN_MGR_TYPE"
  ],
	3221356562: [
    "The interface is unknown.",
    "RPC_NT_UNKNOWN_IF"
  ],
	3221356563: [
    "There are no bindings.",
    "RPC_NT_NO_BINDINGS"
  ],
	3221356564: [
    "There are no protocol sequences.",
    "RPC_NT_NO_PROTSEQS"
  ],
	3221356565: [
    "The endpoint cannot be created.",
    "RPC_NT_CANT_CREATE_ENDPOINT"
  ],
	3221356566: [
    "Insufficient resources are available to complete this operation.",
    "RPC_NT_OUT_OF_RESOURCES"
  ],
	3221356567: [
    "The RPC server is unavailable.",
    "RPC_NT_SERVER_UNAVAILABLE"
  ],
	3221356568: [
    "The RPC server is too busy to complete this operation.",
    "RPC_NT_SERVER_TOO_BUSY"
  ],
	3221356569: [
    "The network options are invalid.",
    "RPC_NT_INVALID_NETWORK_OPTIONS"
  ],
	3221356570: [
    "No RPCs are active on this thread.",
    "RPC_NT_NO_CALL_ACTIVE"
  ],
	3221356571: [
    "The RPC failed.",
    "RPC_NT_CALL_FAILED"
  ],
	3221356572: [
    "The RPC failed and did not execute.",
    "RPC_NT_CALL_FAILED_DNE"
  ],
	3221356573: [
    "An RPC protocol error occurred.",
    "RPC_NT_PROTOCOL_ERROR"
  ],
	3221356575: [
    "The RPC server does not support the transfer syntax.",
    "RPC_NT_UNSUPPORTED_TRANS_SYN"
  ],
	3221356577: [
    "The type UUID is not supported.",
    "RPC_NT_UNSUPPORTED_TYPE"
  ],
	3221356578: [
    "The tag is invalid.",
    "RPC_NT_INVALID_TAG"
  ],
	3221356579: [
    "The array bounds are invalid.",
    "RPC_NT_INVALID_BOUND"
  ],
	3221356580: [
    "The binding does not contain an entry name.",
    "RPC_NT_NO_ENTRY_NAME"
  ],
	3221356581: [
    "The name syntax is invalid.",
    "RPC_NT_INVALID_NAME_SYNTAX"
  ],
	3221356582: [
    "The name syntax is not supported.",
    "RPC_NT_UNSUPPORTED_NAME_SYNTAX"
  ],
	3221356584: [
    "No network address is available to construct a UUID.",
    "RPC_NT_UUID_NO_ADDRESS"
  ],
	3221356585: [
    "The endpoint is a duplicate.",
    "RPC_NT_DUPLICATE_ENDPOINT"
  ],
	3221356586: [
    "The authentication type is unknown.",
    "RPC_NT_UNKNOWN_AUTHN_TYPE"
  ],
	3221356587: [
    "The maximum number of calls is too small.",
    "RPC_NT_MAX_CALLS_TOO_SMALL"
  ],
	3221356588: [
    "The string is too long.",
    "RPC_NT_STRING_TOO_LONG"
  ],
	3221356589: [
    "The RPC protocol sequence was not found.",
    "RPC_NT_PROTSEQ_NOT_FOUND"
  ],
	3221356590: [
    "The procedure number is out of range.",
    "RPC_NT_PROCNUM_OUT_OF_RANGE"
  ],
	3221356591: [
    "The binding does not contain any authentication information.",
    "RPC_NT_BINDING_HAS_NO_AUTH"
  ],
	3221356592: [
    "The authentication service is unknown.",
    "RPC_NT_UNKNOWN_AUTHN_SERVICE"
  ],
	3221356593: [
    "The authentication level is unknown.",
    "RPC_NT_UNKNOWN_AUTHN_LEVEL"
  ],
	3221356594: [
    "The security context is invalid.",
    "RPC_NT_INVALID_AUTH_IDENTITY"
  ],
	3221356595: [
    "The authorization service is unknown.",
    "RPC_NT_UNKNOWN_AUTHZ_SERVICE"
  ],
	3221356596: [
    "The entry is invalid.",
    "EPT_NT_INVALID_ENTRY"
  ],
	3221356597: [
    "The operation cannot be performed.",
    "EPT_NT_CANT_PERFORM_OP"
  ],
	3221356598: [
    "No more endpoints are available from the endpoint mapper.",
    "EPT_NT_NOT_REGISTERED"
  ],
	3221356599: [
    "No interfaces have been exported.",
    "RPC_NT_NOTHING_TO_EXPORT"
  ],
	3221356600: [
    "The entry name is incomplete.",
    "RPC_NT_INCOMPLETE_NAME"
  ],
	3221356601: [
    "The version option is invalid.",
    "RPC_NT_INVALID_VERS_OPTION"
  ],
	3221356602: [
    "There are no more members.",
    "RPC_NT_NO_MORE_MEMBERS"
  ],
	3221356603: [
    "There is nothing to unexport.",
    "RPC_NT_NOT_ALL_OBJS_UNEXPORTED"
  ],
	3221356604: [
    "The interface was not found.",
    "RPC_NT_INTERFACE_NOT_FOUND"
  ],
	3221356605: [
    "The entry already exists.",
    "RPC_NT_ENTRY_ALREADY_EXISTS"
  ],
	3221356606: [
    "The entry was not found.",
    "RPC_NT_ENTRY_NOT_FOUND"
  ],
	3221356607: [
    "The name service is unavailable.",
    "RPC_NT_NAME_SERVICE_UNAVAILABLE"
  ],
	3221356608: [
    "The network address family is invalid.",
    "RPC_NT_INVALID_NAF_ID"
  ],
	3221356609: [
    "The requested operation is not supported.",
    "RPC_NT_CANNOT_SUPPORT"
  ],
	3221356610: [
    "No security context is available to allow impersonation.",
    "RPC_NT_NO_CONTEXT_AVAILABLE"
  ],
	3221356611: [
    "An internal error occurred in the RPC.",
    "RPC_NT_INTERNAL_ERROR"
  ],
	3221356612: [
    "The RPC server attempted to divide an integer by zero.",
    "RPC_NT_ZERO_DIVIDE"
  ],
	3221356613: [
    "An addressing error occurred in the RPC server.",
    "RPC_NT_ADDRESS_ERROR"
  ],
	3221356614: [
    "A floating point operation at the RPC server caused a divide by zero.",
    "RPC_NT_FP_DIV_ZERO"
  ],
	3221356615: [
    "A floating point underflow occurred at the RPC server.",
    "RPC_NT_FP_UNDERFLOW"
  ],
	3221356616: [
    "A floating point overflow occurred at the RPC server.",
    "RPC_NT_FP_OVERFLOW"
  ],
	3221356617: [
    "An RPC is already in progress for this thread.",
    "RPC_NT_CALL_IN_PROGRESS"
  ],
	3221356618: [
    "There are no more bindings.",
    "RPC_NT_NO_MORE_BINDINGS"
  ],
	3221356619: [
    "The group member was not found.",
    "RPC_NT_GROUP_MEMBER_NOT_FOUND"
  ],
	3221356620: [
    "The endpoint mapper database entry could not be created.",
    "EPT_NT_CANT_CREATE"
  ],
	3221356621: [
    "The object UUID is the nil UUID.",
    "RPC_NT_INVALID_OBJECT"
  ],
	3221356623: [
    "No interfaces have been registered.",
    "RPC_NT_NO_INTERFACES"
  ],
	3221356624: [
    "The RPC was canceled.",
    "RPC_NT_CALL_CANCELLED"
  ],
	3221356625: [
    "The binding handle does not contain all the required information.",
    "RPC_NT_BINDING_INCOMPLETE"
  ],
	3221356626: [
    "A communications failure occurred during an RPC.",
    "RPC_NT_COMM_FAILURE"
  ],
	3221356627: [
    "The requested authentication level is not supported.",
    "RPC_NT_UNSUPPORTED_AUTHN_LEVEL"
  ],
	3221356628: [
    "No principal name was registered.",
    "RPC_NT_NO_PRINC_NAME"
  ],
	3221356629: [
    "The error specified is not a valid Windows RPC error code.",
    "RPC_NT_NOT_RPC_ERROR"
  ],
	3221356631: [
    "A security package-specific error occurred.",
    "RPC_NT_SEC_PKG_ERROR"
  ],
	3221356632: [
    "The thread was not canceled.",
    "RPC_NT_NOT_CANCELLED"
  ],
	3221356642: [
    "Invalid asynchronous RPC handle.",
    "RPC_NT_INVALID_ASYNC_HANDLE"
  ],
	3221356643: [
    "Invalid asynchronous RPC call handle for this operation.",
    "RPC_NT_INVALID_ASYNC_CALL"
  ],
	3221356644: [
    "Access to the HTTP proxy is denied.",
    "RPC_NT_PROXY_ACCESS_DENIED"
  ],
	3221422081: [
    "The list of RPC servers available for auto-handle binding has been exhausted.",
    "RPC_NT_NO_MORE_ENTRIES"
  ],
	3221422082: [
    "The file designated by DCERPCCHARTRANS cannot be opened.",
    "RPC_NT_SS_CHAR_TRANS_OPEN_FAIL"
  ],
	3221422083: [
    "The file containing the character translation table has fewer than 512 bytes.",
    "RPC_NT_SS_CHAR_TRANS_SHORT_FILE"
  ],
	3221422084: [
    "A null context handle is passed as an [in] parameter.",
    "RPC_NT_SS_IN_NULL_CONTEXT"
  ],
	3221422085: [
    "The context handle does not match any known context handles.",
    "RPC_NT_SS_CONTEXT_MISMATCH"
  ],
	3221422086: [
    "The context handle changed during a call.",
    "RPC_NT_SS_CONTEXT_DAMAGED"
  ],
	3221422087: [
    "The binding handles passed to an RPC do not match.",
    "RPC_NT_SS_HANDLES_MISMATCH"
  ],
	3221422088: [
    "The stub is unable to get the call handle.",
    "RPC_NT_SS_CANNOT_GET_CALL_HANDLE"
  ],
	3221422089: [
    "A null reference pointer was passed to the stub.",
    "RPC_NT_NULL_REF_POINTER"
  ],
	3221422090: [
    "The enumeration value is out of range.",
    "RPC_NT_ENUM_VALUE_OUT_OF_RANGE"
  ],
	3221422091: [
    "The byte count is too small.",
    "RPC_NT_BYTE_COUNT_TOO_SMALL"
  ],
	3221422092: [
    "The stub received bad data.",
    "RPC_NT_BAD_STUB_DATA"
  ],
	3221422169: [
    "Invalid operation on the encoding/decoding handle.",
    "RPC_NT_INVALID_ES_ACTION"
  ],
	3221422170: [
    "Incompatible version of the serializing package.",
    "RPC_NT_WRONG_ES_VERSION"
  ],
	3221422171: [
    "Incompatible version of the RPC stub.",
    "RPC_NT_WRONG_STUB_VERSION"
  ],
	3221422172: [
    "The RPC pipe object is invalid or corrupt.",
    "RPC_NT_INVALID_PIPE_OBJECT"
  ],
	3221422173: [
    "An invalid operation was attempted on an RPC pipe object.",
    "RPC_NT_INVALID_PIPE_OPERATION"
  ],
	3221422174: [
    "Unsupported RPC pipe version.",
    "RPC_NT_WRONG_PIPE_VERSION"
  ],
	3221422175: [
    "The RPC pipe object has already been closed.",
    "RPC_NT_PIPE_CLOSED"
  ],
	3221422176: [
    "The RPC call completed before all pipes were processed.",
    "RPC_NT_PIPE_DISCIPLINE_ERROR"
  ],
	3221422177: [
    "No more data is available from the RPC pipe.",
    "RPC_NT_PIPE_EMPTY"
  ],
	3221487669: [
    "A device is missing in the system BIOS MPS table. This device will not be used. Contact your system vendor for a system BIOS update.",
    "STATUS_PNP_BAD_MPS_TABLE"
  ],
	3221487670: [
    "A translator failed to translate resources.",
    "STATUS_PNP_TRANSLATION_FAILED"
  ],
	3221487671: [
    "An IRQ translator failed to translate resources.",
    "STATUS_PNP_IRQ_TRANSLATION_FAILED"
  ],
	3221487672: [
    "Driver returned an invalid ID for a child device.",
    "STATUS_PNP_INVALID_ID"
  ],
	3221487673: [
    "Reissue the given operation as a cached I/O operation",
    "STATUS_IO_REISSUE_AS_CACHED"
  ],
	3221880833: [
    "Session name is invalid.",
    "STATUS_CTX_WINSTATION_NAME_INVALID"
  ],
	3221880834: [
    "The protocol driver is invalid.",
    "STATUS_CTX_INVALID_PD"
  ],
	3221880835: [
    "The protocol driver was not found in the system path.",
    "STATUS_CTX_PD_NOT_FOUND"
  ],
	3221880838: [
    "A close operation is pending on the terminal connection.",
    "STATUS_CTX_CLOSE_PENDING"
  ],
	3221880839: [
    "No free output buffers are available.",
    "STATUS_CTX_NO_OUTBUF"
  ],
	3221880840: [
    "The MODEM.INF file was not found.",
    "STATUS_CTX_MODEM_INF_NOT_FOUND"
  ],
	3221880841: [
    "The modem was not found in the MODEM.INF file.",
    "STATUS_CTX_INVALID_MODEMNAME"
  ],
	3221880842: [
    "The modem did not accept the command sent to it. Verify that the configured modem name matches the attached modem.",
    "STATUS_CTX_RESPONSE_ERROR"
  ],
	3221880843: [
    "The modem did not respond to the command sent to it. Verify that the modem cable is properly attached and the modem is turned on.",
    "STATUS_CTX_MODEM_RESPONSE_TIMEOUT"
  ],
	3221880844: [
    "Carrier detection has failed or the carrier has been dropped due to disconnection.",
    "STATUS_CTX_MODEM_RESPONSE_NO_CARRIER"
  ],
	3221880845: [
    "A dial tone was not detected within the required time. Verify that the phone cable is properly attached and functional.",
    "STATUS_CTX_MODEM_RESPONSE_NO_DIALTONE"
  ],
	3221880846: [
    "A busy signal was detected at a remote site on callback.",
    "STATUS_CTX_MODEM_RESPONSE_BUSY"
  ],
	3221880847: [
    "A voice was detected at a remote site on callback.",
    "STATUS_CTX_MODEM_RESPONSE_VOICE"
  ],
	3221880848: [
    "Transport driver error.",
    "STATUS_CTX_TD_ERROR"
  ],
	3221880850: [
    "The client you are using is not licensed to use this system. Your logon request is denied.",
    "STATUS_CTX_LICENSE_CLIENT_INVALID"
  ],
	3221880851: [
    "The system has reached its licensed logon limit. Try again later.",
    "STATUS_CTX_LICENSE_NOT_AVAILABLE"
  ],
	3221880852: [
    "The system license has expired. Your logon request is denied.",
    "STATUS_CTX_LICENSE_EXPIRED"
  ],
	3221880853: [
    "The specified session cannot be found.",
    "STATUS_CTX_WINSTATION_NOT_FOUND"
  ],
	3221880854: [
    "The specified session name is already in use.",
    "STATUS_CTX_WINSTATION_NAME_COLLISION"
  ],
	3221880855: [
    "The requested operation cannot be completed because the terminal connection is currently processing a connect, disconnect, reset, or delete operation.",
    "STATUS_CTX_WINSTATION_BUSY"
  ],
	3221880856: [
    "An attempt has been made to connect to a session whose video mode is not supported by the current client.",
    "STATUS_CTX_BAD_VIDEO_MODE"
  ],
	3221880866: [
    "The application attempted to enable DOS graphics mode. DOS graphics mode is not supported.",
    "STATUS_CTX_GRAPHICS_INVALID"
  ],
	3221880868: [
    "The requested operation can be performed only on the system console. This is most often the result of a driver or system DLL requiring direct console access.",
    "STATUS_CTX_NOT_CONSOLE"
  ],
	3221880870: [
    "The client failed to respond to the server connect message.",
    "STATUS_CTX_CLIENT_QUERY_TIMEOUT"
  ],
	3221880871: [
    "Disconnecting the console session is not supported.",
    "STATUS_CTX_CONSOLE_DISCONNECT"
  ],
	3221880872: [
    "Reconnecting a disconnected session to the console is not supported.",
    "STATUS_CTX_CONSOLE_CONNECT"
  ],
	3221880874: [
    "The request to control another session remotely was denied.",
    "STATUS_CTX_SHADOW_DENIED"
  ],
	3221880875: [
    "A process has requested access to a session, but has not been granted those access rights.",
    "STATUS_CTX_WINSTATION_ACCESS_DENIED"
  ],
	3221880878: [
    "The terminal connection driver is invalid.",
    "STATUS_CTX_INVALID_WD"
  ],
	3221880879: [
    "The terminal connection driver was not found in the system path.",
    "STATUS_CTX_WD_NOT_FOUND"
  ],
	3221880880: [
    "The requested session cannot be controlled remotely. You cannot control your own session, a session that is trying to control your session, a session that has no user logged on, or other sessions from the console.",
    "STATUS_CTX_SHADOW_INVALID"
  ],
	3221880881: [
    "The requested session is not configured to allow remote control.",
    "STATUS_CTX_SHADOW_DISABLED"
  ],
	3221880882: [
    "The RDP protocol component detected an error in the protocol stream and has disconnected the client.",
    "STATUS_RDP_PROTOCOL_ERROR"
  ],
	3221880883: [
    "Your request to connect to this terminal server has been rejected. Your terminal server client license number has not been entered for this copy of the terminal client. Contact your system administrator for help in entering a valid, unique license number for this terminal server client. Click OK to continue.",
    "STATUS_CTX_CLIENT_LICENSE_NOT_SET"
  ],
	3221880884: [
    "Your request to connect to this terminal server has been rejected. Your terminal server client license number is currently being used by another user. Contact your system administrator to obtain a new copy of the terminal server client with a valid, unique license number. Click OK to continue.",
    "STATUS_CTX_CLIENT_LICENSE_IN_USE"
  ],
	3221880885: [
    "The remote control of the console was terminated because the display mode was changed. Changing the display mode in a remote control session is not supported.",
    "STATUS_CTX_SHADOW_ENDED_BY_MODE_CHANGE"
  ],
	3221880886: [
    "Remote control could not be terminated because the specified session is not currently being remotely controlled.",
    "STATUS_CTX_SHADOW_NOT_RUNNING"
  ],
	3221880887: [
    "Your interactive logon privilege has been disabled. Contact your system administrator.",
    "STATUS_CTX_LOGON_DISABLED"
  ],
	3221880888: [
    "The terminal server security layer detected an error in the protocol stream and has disconnected the client.",
    "STATUS_CTX_SECURITY_LAYER_ERROR"
  ],
	3221880889: [
    "The target session is incompatible with the current session.",
    "STATUS_TS_INCOMPATIBLE_SESSIONS"
  ],
	3221946369: [
    "The resource loader failed to find an MUI file.",
    "STATUS_MUI_FILE_NOT_FOUND"
  ],
	3221946370: [
    "The resource loader failed to load an MUI file because the file failed to pass validation.",
    "STATUS_MUI_INVALID_FILE"
  ],
	3221946371: [
    "The RC manifest is corrupted with garbage data, is an unsupported version, or is missing a required item.",
    "STATUS_MUI_INVALID_RC_CONFIG"
  ],
	3221946372: [
    "The RC manifest has an invalid culture name.",
    "STATUS_MUI_INVALID_LOCALE_NAME"
  ],
	3221946373: [
    "The RC manifest has and invalid ultimate fallback name.",
    "STATUS_MUI_INVALID_ULTIMATEFALLBACK_NAME"
  ],
	3221946374: [
    "The resource loader cache does not have a loaded MUI entry.",
    "STATUS_MUI_FILE_NOT_LOADED"
  ],
	3221946375: [
    "The user stopped resource enumeration.",
    "STATUS_RESOURCE_ENUM_USER_STOP"
  ],
	3222470657: [
    "The cluster node is not valid.",
    "STATUS_CLUSTER_INVALID_NODE"
  ],
	3222470658: [
    "The cluster node already exists.",
    "STATUS_CLUSTER_NODE_EXISTS"
  ],
	3222470659: [
    "A node is in the process of joining the cluster.",
    "STATUS_CLUSTER_JOIN_IN_PROGRESS"
  ],
	3222470660: [
    "The cluster node was not found.",
    "STATUS_CLUSTER_NODE_NOT_FOUND"
  ],
	3222470661: [
    "The cluster local node information was not found.",
    "STATUS_CLUSTER_LOCAL_NODE_NOT_FOUND"
  ],
	3222470662: [
    "The cluster network already exists.",
    "STATUS_CLUSTER_NETWORK_EXISTS"
  ],
	3222470663: [
    "The cluster network was not found.",
    "STATUS_CLUSTER_NETWORK_NOT_FOUND"
  ],
	3222470664: [
    "The cluster network interface already exists.",
    "STATUS_CLUSTER_NETINTERFACE_EXISTS"
  ],
	3222470665: [
    "The cluster network interface was not found.",
    "STATUS_CLUSTER_NETINTERFACE_NOT_FOUND"
  ],
	3222470666: [
    "The cluster request is not valid for this object.",
    "STATUS_CLUSTER_INVALID_REQUEST"
  ],
	3222470667: [
    "The cluster network provider is not valid.",
    "STATUS_CLUSTER_INVALID_NETWORK_PROVIDER"
  ],
	3222470668: [
    "The cluster node is down.",
    "STATUS_CLUSTER_NODE_DOWN"
  ],
	3222470669: [
    "The cluster node is not reachable.",
    "STATUS_CLUSTER_NODE_UNREACHABLE"
  ],
	3222470670: [
    "The cluster node is not a member of the cluster.",
    "STATUS_CLUSTER_NODE_NOT_MEMBER"
  ],
	3222470671: [
    "A cluster join operation is not in progress.",
    "STATUS_CLUSTER_JOIN_NOT_IN_PROGRESS"
  ],
	3222470672: [
    "The cluster network is not valid.",
    "STATUS_CLUSTER_INVALID_NETWORK"
  ],
	3222470673: [
    "No network adapters are available.",
    "STATUS_CLUSTER_NO_NET_ADAPTERS"
  ],
	3222470674: [
    "The cluster node is up.",
    "STATUS_CLUSTER_NODE_UP"
  ],
	3222470675: [
    "The cluster node is paused.",
    "STATUS_CLUSTER_NODE_PAUSED"
  ],
	3222470676: [
    "The cluster node is not paused.",
    "STATUS_CLUSTER_NODE_NOT_PAUSED"
  ],
	3222470677: [
    "No cluster security context is available.",
    "STATUS_CLUSTER_NO_SECURITY_CONTEXT"
  ],
	3222470678: [
    "The cluster network is not configured for internal cluster communication.",
    "STATUS_CLUSTER_NETWORK_NOT_INTERNAL"
  ],
	3222470679: [
    "The cluster node has been poisoned.",
    "STATUS_CLUSTER_POISONED"
  ],
	3222536193: [
    "An attempt was made to run an invalid AML opcode.",
    "STATUS_ACPI_INVALID_OPCODE"
  ],
	3222536194: [
    "The AML interpreter stack has overflowed.",
    "STATUS_ACPI_STACK_OVERFLOW"
  ],
	3222536195: [
    "An inconsistent state has occurred.",
    "STATUS_ACPI_ASSERT_FAILED"
  ],
	3222536196: [
    "An attempt was made to access an array outside its bounds.",
    "STATUS_ACPI_INVALID_INDEX"
  ],
	3222536197: [
    "A required argument was not specified.",
    "STATUS_ACPI_INVALID_ARGUMENT"
  ],
	3222536198: [
    "A fatal error has occurred.",
    "STATUS_ACPI_FATAL"
  ],
	3222536199: [
    "An invalid SuperName was specified.",
    "STATUS_ACPI_INVALID_SUPERNAME"
  ],
	3222536200: [
    "An argument with an incorrect type was specified.",
    "STATUS_ACPI_INVALID_ARGTYPE"
  ],
	3222536201: [
    "An object with an incorrect type was specified.",
    "STATUS_ACPI_INVALID_OBJTYPE"
  ],
	3222536202: [
    "A target with an incorrect type was specified.",
    "STATUS_ACPI_INVALID_TARGETTYPE"
  ],
	3222536203: [
    "An incorrect number of arguments was specified.",
    "STATUS_ACPI_INCORRECT_ARGUMENT_COUNT"
  ],
	3222536204: [
    "An address failed to translate.",
    "STATUS_ACPI_ADDRESS_NOT_MAPPED"
  ],
	3222536205: [
    "An incorrect event type was specified.",
    "STATUS_ACPI_INVALID_EVENTTYPE"
  ],
	3222536206: [
    "A handler for the target already exists.",
    "STATUS_ACPI_HANDLER_COLLISION"
  ],
	3222536207: [
    "Invalid data for the target was specified.",
    "STATUS_ACPI_INVALID_DATA"
  ],
	3222536208: [
    "An invalid region for the target was specified.",
    "STATUS_ACPI_INVALID_REGION"
  ],
	3222536209: [
    "An attempt was made to access a field outside the defined range.",
    "STATUS_ACPI_INVALID_ACCESS_SIZE"
  ],
	3222536210: [
    "The global system lock could not be acquired.",
    "STATUS_ACPI_ACQUIRE_GLOBAL_LOCK"
  ],
	3222536211: [
    "An attempt was made to reinitialize the ACPI subsystem.",
    "STATUS_ACPI_ALREADY_INITIALIZED"
  ],
	3222536212: [
    "The ACPI subsystem has not been initialized.",
    "STATUS_ACPI_NOT_INITIALIZED"
  ],
	3222536213: [
    "An incorrect mutex was specified.",
    "STATUS_ACPI_INVALID_MUTEX_LEVEL"
  ],
	3222536214: [
    "The mutex is not currently owned.",
    "STATUS_ACPI_MUTEX_NOT_OWNED"
  ],
	3222536215: [
    "An attempt was made to access the mutex by a process that was not the owner.",
    "STATUS_ACPI_MUTEX_NOT_OWNER"
  ],
	3222536216: [
    "An error occurred during an access to region space.",
    "STATUS_ACPI_RS_ACCESS"
  ],
	3222536217: [
    "An attempt was made to use an incorrect table.",
    "STATUS_ACPI_INVALID_TABLE"
  ],
	3222536224: [
    "The registration of an ACPI event failed.",
    "STATUS_ACPI_REG_HANDLER_FAILED"
  ],
	3222536225: [
    "An ACPI power object failed to transition state.",
    "STATUS_ACPI_POWER_REQUEST_FAILED"
  ],
	3222601729: [
    "The requested section is not present in the activation context.",
    "STATUS_SXS_SECTION_NOT_FOUND"
  ],
	3222601730: [
    "Windows was unble to process the application binding information. Refer to the system event log for further information.",
    "STATUS_SXS_CANT_GEN_ACTCTX"
  ],
	3222601731: [
    "The application binding data format is invalid.",
    "STATUS_SXS_INVALID_ACTCTXDATA_FORMAT"
  ],
	3222601732: [
    "The referenced assembly is not installed on the system.",
    "STATUS_SXS_ASSEMBLY_NOT_FOUND"
  ],
	3222601733: [
    "The manifest file does not begin with the required tag and format information.",
    "STATUS_SXS_MANIFEST_FORMAT_ERROR"
  ],
	3222601734: [
    "The manifest file contains one or more syntax errors.",
    "STATUS_SXS_MANIFEST_PARSE_ERROR"
  ],
	3222601735: [
    "The application attempted to activate a disabled activation context.",
    "STATUS_SXS_ACTIVATION_CONTEXT_DISABLED"
  ],
	3222601736: [
    "The requested lookup key was not found in any active activation context.",
    "STATUS_SXS_KEY_NOT_FOUND"
  ],
	3222601737: [
    "A component version required by the application conflicts with another component version that is already active.",
    "STATUS_SXS_VERSION_CONFLICT"
  ],
	3222601738: [
    "The type requested activation context section does not match the query API used.",
    "STATUS_SXS_WRONG_SECTION_TYPE"
  ],
	3222601739: [
    "Lack of system resources has required isolated activation to be disabled for the current thread of execution.",
    "STATUS_SXS_THREAD_QUERIES_DISABLED"
  ],
	3222601740: [
    "The referenced assembly could not be found.",
    "STATUS_SXS_ASSEMBLY_MISSING"
  ],
	3222601742: [
    "An attempt to set the process default activation context failed because the process default activation context was already set.",
    "STATUS_SXS_PROCESS_DEFAULT_ALREADY_SET"
  ],
	3222601743: [
    "The activation context being deactivated is not the most recently activated one.",
    "STATUS_SXS_EARLY_DEACTIVATION"
  ],
	3222601744: [
    "The activation context being deactivated is not active for the current thread of execution.",
    "STATUS_SXS_INVALID_DEACTIVATION"
  ],
	3222601745: [
    "The activation context being deactivated has already been deactivated.",
    "STATUS_SXS_MULTIPLE_DEACTIVATION"
  ],
	3222601746: [
    "The activation context of the system default assembly could not be generated.",
    "STATUS_SXS_SYSTEM_DEFAULT_ACTIVATION_CONTEXT_EMPTY"
  ],
	3222601747: [
    "A component used by the isolation facility has requested that the process be terminated.",
    "STATUS_SXS_PROCESS_TERMINATION_REQUESTED"
  ],
	3222601748: [
    "The activation context activation stack for the running thread of execution is corrupt.",
    "STATUS_SXS_CORRUPT_ACTIVATION_STACK"
  ],
	3222601749: [
    "The application isolation metadata for this process or thread has become corrupt.",
    "STATUS_SXS_CORRUPTION"
  ],
	3222601750: [
    "The value of an attribute in an identity is not within the legal range.",
    "STATUS_SXS_INVALID_IDENTITY_ATTRIBUTE_VALUE"
  ],
	3222601751: [
    "The name of an attribute in an identity is not within the legal range.",
    "STATUS_SXS_INVALID_IDENTITY_ATTRIBUTE_NAME"
  ],
	3222601752: [
    "An identity contains two definitions for the same attribute.",
    "STATUS_SXS_IDENTITY_DUPLICATE_ATTRIBUTE"
  ],
	3222601753: [
    "The identity string is malformed. This might be due to a trailing comma, more than two unnamed attributes, a missing attribute name, or a missing attribute value.",
    "STATUS_SXS_IDENTITY_PARSE_ERROR"
  ],
	3222601754: [
    "The component store has become corrupted.",
    "STATUS_SXS_COMPONENT_STORE_CORRUPT"
  ],
	3222601755: [
    "A component's file does not match the verification information present in the component manifest.",
    "STATUS_SXS_FILE_HASH_MISMATCH"
  ],
	3222601756: [
    "The identities of the manifests are identical, but their contents are different.",
    "STATUS_SXS_MANIFEST_IDENTITY_SAME_BUT_CONTENTS_DIFFERENT"
  ],
	3222601757: [
    "The component identities are different.",
    "STATUS_SXS_IDENTITIES_DIFFERENT"
  ],
	3222601758: [
    "The assembly is not a deployment.",
    "STATUS_SXS_ASSEMBLY_IS_NOT_A_DEPLOYMENT"
  ],
	3222601759: [
    "The file is not a part of the assembly.",
    "STATUS_SXS_FILE_NOT_PART_OF_ASSEMBLY"
  ],
	3222601760: [
    "An advanced installer failed during setup or servicing.",
    "STATUS_ADVANCED_INSTALLER_FAILED"
  ],
	3222601761: [
    "The character encoding in the XML declaration did not match the encoding used in the document.",
    "STATUS_XML_ENCODING_MISMATCH"
  ],
	3222601762: [
    "The size of the manifest exceeds the maximum allowed.",
    "STATUS_SXS_MANIFEST_TOO_BIG"
  ],
	3222601763: [
    "The setting is not registered.",
    "STATUS_SXS_SETTING_NOT_REGISTERED"
  ],
	3222601764: [
    "One or more required transaction members are not present.",
    "STATUS_SXS_TRANSACTION_CLOSURE_INCOMPLETE"
  ],
	3222601765: [
    "The SMI primitive installer failed during setup or servicing.",
    "STATUS_SMI_PRIMITIVE_INSTALLER_FAILED"
  ],
	3222601766: [
    "A generic command executable returned a result that indicates failure.",
    "STATUS_GENERIC_COMMAND_FAILED"
  ],
	3222601767: [
    "A component is missing file verification information in its manifest.",
    "STATUS_SXS_FILE_HASH_MISSING"
  ],
	3222863873: [
    "The function attempted to use a name that is reserved for use by another transaction.",
    "STATUS_TRANSACTIONAL_CONFLICT"
  ],
	3222863874: [
    "The transaction handle associated with this operation is invalid.",
    "STATUS_INVALID_TRANSACTION"
  ],
	3222863875: [
    "The requested operation was made in the context of a transaction that is no longer active.",
    "STATUS_TRANSACTION_NOT_ACTIVE"
  ],
	3222863876: [
    "The transaction manager was unable to be successfully initialized. Transacted operations are not supported.",
    "STATUS_TM_INITIALIZATION_FAILED"
  ],
	3222863877: [
    "Transaction support within the specified file system resource manager was not started or was shut down due to an error.",
    "STATUS_RM_NOT_ACTIVE"
  ],
	3222863878: [
    "The metadata of the resource manager has been corrupted. The resource manager will not function.",
    "STATUS_RM_METADATA_CORRUPT"
  ],
	3222863879: [
    "The resource manager attempted to prepare a transaction that it has not successfully joined.",
    "STATUS_TRANSACTION_NOT_JOINED"
  ],
	3222863880: [
    "The specified directory does not contain a file system resource manager.",
    "STATUS_DIRECTORY_NOT_RM"
  ],
	3222863882: [
    "The remote server or share does not support transacted file operations.",
    "STATUS_TRANSACTIONS_UNSUPPORTED_REMOTE"
  ],
	3222863883: [
    "The requested log size for the file system resource manager is invalid.",
    "STATUS_LOG_RESIZE_INVALID_SIZE"
  ],
	3222863884: [
    "The remote server sent mismatching version number or Fid for a file opened with transactions.",
    "STATUS_REMOTE_FILE_VERSION_MISMATCH"
  ],
	3222863887: [
    "The resource manager tried to register a protocol that already exists.",
    "STATUS_CRM_PROTOCOL_ALREADY_EXISTS"
  ],
	3222863888: [
    "The attempt to propagate the transaction failed.",
    "STATUS_TRANSACTION_PROPAGATION_FAILED"
  ],
	3222863889: [
    "The requested propagation protocol was not registered as a CRM.",
    "STATUS_CRM_PROTOCOL_NOT_FOUND"
  ],
	3222863890: [
    "The transaction object already has a superior enlistment, and the caller attempted an operation that would have created a new superior. Only a single superior enlistment is allowed.",
    "STATUS_TRANSACTION_SUPERIOR_EXISTS"
  ],
	3222863891: [
    "The requested operation is not valid on the transaction object in its current state.",
    "STATUS_TRANSACTION_REQUEST_NOT_VALID"
  ],
	3222863892: [
    "The caller has called a response API, but the response is not expected because the transaction manager did not issue the corresponding request to the caller.",
    "STATUS_TRANSACTION_NOT_REQUESTED"
  ],
	3222863893: [
    "It is too late to perform the requested operation, because the transaction has already been aborted.",
    "STATUS_TRANSACTION_ALREADY_ABORTED"
  ],
	3222863894: [
    "It is too late to perform the requested operation, because the transaction has already been committed.",
    "STATUS_TRANSACTION_ALREADY_COMMITTED"
  ],
	3222863895: [
    "The buffer passed in to NtPushTransaction or NtPullTransaction is not in a valid format.",
    "STATUS_TRANSACTION_INVALID_MARSHALL_BUFFER"
  ],
	3222863896: [
    "The current transaction context associated with the thread is not a valid handle to a transaction object.",
    "STATUS_CURRENT_TRANSACTION_NOT_VALID"
  ],
	3222863897: [
    "An attempt to create space in the transactional resource manager's log failed. The failure status has been recorded in the event log.",
    "STATUS_LOG_GROWTH_FAILED"
  ],
	3222863905: [
    "The object (file, stream, or link) that corresponds to the handle has been deleted by a transaction savepoint rollback.",
    "STATUS_OBJECT_NO_LONGER_EXISTS"
  ],
	3222863906: [
    "The specified file miniversion was not found for this transacted file open.",
    "STATUS_STREAM_MINIVERSION_NOT_FOUND"
  ],
	3222863907: [
    "The specified file miniversion was found but has been invalidated. The most likely cause is a transaction savepoint rollback.",
    "STATUS_STREAM_MINIVERSION_NOT_VALID"
  ],
	3222863908: [
    "A miniversion can be opened only in the context of the transaction that created it.",
    "STATUS_MINIVERSION_INACCESSIBLE_FROM_SPECIFIED_TRANSACTION"
  ],
	3222863909: [
    "It is not possible to open a miniversion with modify access.",
    "STATUS_CANT_OPEN_MINIVERSION_WITH_MODIFY_INTENT"
  ],
	3222863910: [
    "It is not possible to create any more miniversions for this stream.",
    "STATUS_CANT_CREATE_MORE_STREAM_MINIVERSIONS"
  ],
	3222863912: [
    "The handle has been invalidated by a transaction. The most likely cause is the presence of memory mapping on a file or an open handle when the transaction ended or rolled back to savepoint.",
    "STATUS_HANDLE_NO_LONGER_VALID"
  ],
	3222863920: [
    "The log data is corrupt.",
    "STATUS_LOG_CORRUPTION_DETECTED"
  ],
	3222863922: [
    "The transaction outcome is unavailable because the resource manager responsible for it is disconnected.",
    "STATUS_RM_DISCONNECTED"
  ],
	3222863923: [
    "The request was rejected because the enlistment in question is not a superior enlistment.",
    "STATUS_ENLISTMENT_NOT_SUPERIOR"
  ],
	3222863926: [
    "The file cannot be opened in a transaction because its identity depends on the outcome of an unresolved transaction.",
    "STATUS_FILE_IDENTITY_NOT_PERSISTENT"
  ],
	3222863927: [
    "The operation cannot be performed because another transaction is depending on this property not changing.",
    "STATUS_CANT_BREAK_TRANSACTIONAL_DEPENDENCY"
  ],
	3222863928: [
    "The operation would involve a single file with two transactional resource managers and is, therefore, not allowed.",
    "STATUS_CANT_CROSS_RM_BOUNDARY"
  ],
	3222863929: [
    "The $Txf directory must be empty for this operation to succeed.",
    "STATUS_TXF_DIR_NOT_EMPTY"
  ],
	3222863930: [
    "The operation would leave a transactional resource manager in an inconsistent state and is therefore not allowed.",
    "STATUS_INDOUBT_TRANSACTIONS_EXIST"
  ],
	3222863931: [
    "The operation could not be completed because the transaction manager does not have a log.",
    "STATUS_TM_VOLATILE"
  ],
	3222863932: [
    "A rollback could not be scheduled because a previously scheduled rollback has already executed or been queued for execution.",
    "STATUS_ROLLBACK_TIMER_EXPIRED"
  ],
	3222863933: [
    "The transactional metadata attribute on the file or directory is corrupt and unreadable.",
    "STATUS_TXF_ATTRIBUTE_CORRUPT"
  ],
	3222863934: [
    "The encryption operation could not be completed because a transaction is active.",
    "STATUS_EFS_NOT_ALLOWED_IN_TRANSACTION"
  ],
	3222863935: [
    "This object is not allowed to be opened in a transaction.",
    "STATUS_TRANSACTIONAL_OPEN_NOT_ALLOWED"
  ],
	3222863936: [
    "Memory mapping (creating a mapped section) a remote file under a transaction is not supported.",
    "STATUS_TRANSACTED_MAPPING_UNSUPPORTED_REMOTE"
  ],
	3222863939: [
    "Promotion was required to allow the resource manager to enlist, but the transaction was set to disallow it.",
    "STATUS_TRANSACTION_REQUIRED_PROMOTION"
  ],
	3222863940: [
    "This file is open for modification in an unresolved transaction and can be opened for execute only by a transacted reader.",
    "STATUS_CANNOT_EXECUTE_FILE_IN_TRANSACTION"
  ],
	3222863941: [
    "The request to thaw frozen transactions was ignored because transactions were not previously frozen.",
    "STATUS_TRANSACTIONS_NOT_FROZEN"
  ],
	3222863942: [
    "Transactions cannot be frozen because a freeze is already in progress.",
    "STATUS_TRANSACTION_FREEZE_IN_PROGRESS"
  ],
	3222863943: [
    "The target volume is not a snapshot volume. This operation is valid only on a volume mounted as a snapshot.",
    "STATUS_NOT_SNAPSHOT_VOLUME"
  ],
	3222863944: [
    "The savepoint operation failed because files are open on the transaction, which is not permitted.",
    "STATUS_NO_SAVEPOINT_WITH_OPEN_FILES"
  ],
	3222863945: [
    "The sparse operation could not be completed because a transaction is active on the file.",
    "STATUS_SPARSE_NOT_ALLOWED_IN_TRANSACTION"
  ],
	3222863946: [
    "The call to create a transaction manager object failed because the Tm Identity that is stored in the log file does not match the Tm Identity that was passed in as an argument.",
    "STATUS_TM_IDENTITY_MISMATCH"
  ],
	3222863947: [
    "I/O was attempted on a section object that has been floated as a result of a transaction ending. There is no valid data.",
    "STATUS_FLOATED_SECTION"
  ],
	3222863948: [
    "The transactional resource manager cannot currently accept transacted work due to a transient condition, such as low resources.",
    "STATUS_CANNOT_ACCEPT_TRANSACTED_WORK"
  ],
	3222863949: [
    "The transactional resource manager had too many transactions outstanding that could not be aborted. The transactional resource manager has been shut down.",
    "STATUS_CANNOT_ABORT_TRANSACTIONS"
  ],
	3222863950: [
    "The specified transaction was unable to be opened because it was not found.",
    "STATUS_TRANSACTION_NOT_FOUND"
  ],
	3222863951: [
    "The specified resource manager was unable to be opened because it was not found.",
    "STATUS_RESOURCEMANAGER_NOT_FOUND"
  ],
	3222863952: [
    "The specified enlistment was unable to be opened because it was not found.",
    "STATUS_ENLISTMENT_NOT_FOUND"
  ],
	3222863953: [
    "The specified transaction manager was unable to be opened because it was not found.",
    "STATUS_TRANSACTIONMANAGER_NOT_FOUND"
  ],
	3222863954: [
    "The specified resource manager was unable to create an enlistment because its associated transaction manager is not online.",
    "STATUS_TRANSACTIONMANAGER_NOT_ONLINE"
  ],
	3222863955: [
    "The specified transaction manager was unable to create the objects contained in its log file in the Ob namespace. Therefore, the transaction manager was unable to recover.",
    "STATUS_TRANSACTIONMANAGER_RECOVERY_NAME_COLLISION"
  ],
	3222863956: [
    "The call to create a superior enlistment on this transaction object could not be completed because the transaction object specified for the enlistment is a subordinate branch of the transaction. Only the root of the transaction can be enlisted as a superior.",
    "STATUS_TRANSACTION_NOT_ROOT"
  ],
	3222863957: [
    "Because the associated transaction manager or resource manager has been closed, the handle is no longer valid.",
    "STATUS_TRANSACTION_OBJECT_EXPIRED"
  ],
	3222863958: [
    "The compression operation could not be completed because a transaction is active on the file.",
    "STATUS_COMPRESSION_NOT_ALLOWED_IN_TRANSACTION"
  ],
	3222863959: [
    "The specified operation could not be performed on this superior enlistment because the enlistment was not created with the corresponding completion response in the NotificationMask.",
    "STATUS_TRANSACTION_RESPONSE_NOT_ENLISTED"
  ],
	3222863960: [
    "The specified operation could not be performed because the record to be logged was too long. This can occur because either there are too many enlistments on this transaction or the combined RecoveryInformation being logged on behalf of those enlistments is too long.",
    "STATUS_TRANSACTION_RECORD_TOO_LONG"
  ],
	3222863961: [
    "The link-tracking operation could not be completed because a transaction is active.",
    "STATUS_NO_LINK_TRACKING_IN_TRANSACTION"
  ],
	3222863962: [
    "This operation cannot be performed in a transaction.",
    "STATUS_OPERATION_NOT_SUPPORTED_IN_TRANSACTION"
  ],
	3222863963: [
    "The kernel transaction manager had to abort or forget the transaction because it blocked forward progress.",
    "STATUS_TRANSACTION_INTEGRITY_VIOLATED"
  ],
	3222863968: [
    "The handle is no longer properly associated with its transaction.  It might have been opened in a transactional resource manager that was subsequently forced to restart.  Please close the handle and open a new one.",
    "STATUS_EXPIRED_HANDLE"
  ],
	3222863969: [
    "The specified operation could not be performed because the resource manager is not enlisted in the transaction.",
    "STATUS_TRANSACTION_NOT_ENLISTED"
  ],
	3222929409: [
    "The log service found an invalid log sector.",
    "STATUS_LOG_SECTOR_INVALID"
  ],
	3222929410: [
    "The log service encountered a log sector with invalid block parity.",
    "STATUS_LOG_SECTOR_PARITY_INVALID"
  ],
	3222929411: [
    "The log service encountered a remapped log sector.",
    "STATUS_LOG_SECTOR_REMAPPED"
  ],
	3222929412: [
    "The log service encountered a partial or incomplete log block.",
    "STATUS_LOG_BLOCK_INCOMPLETE"
  ],
	3222929413: [
    "The log service encountered an attempt to access data outside the active log range.",
    "STATUS_LOG_INVALID_RANGE"
  ],
	3222929414: [
    "The log service user-log marshaling buffers are exhausted.",
    "STATUS_LOG_BLOCKS_EXHAUSTED"
  ],
	3222929415: [
    "The log service encountered an attempt to read from a marshaling area with an invalid read context.",
    "STATUS_LOG_READ_CONTEXT_INVALID"
  ],
	3222929416: [
    "The log service encountered an invalid log restart area.",
    "STATUS_LOG_RESTART_INVALID"
  ],
	3222929417: [
    "The log service encountered an invalid log block version.",
    "STATUS_LOG_BLOCK_VERSION"
  ],
	3222929418: [
    "The log service encountered an invalid log block.",
    "STATUS_LOG_BLOCK_INVALID"
  ],
	3222929419: [
    "The log service encountered an attempt to read the log with an invalid read mode.",
    "STATUS_LOG_READ_MODE_INVALID"
  ],
	3222929421: [
    "The log service encountered a corrupted metadata file.",
    "STATUS_LOG_METADATA_CORRUPT"
  ],
	3222929422: [
    "The log service encountered a metadata file that could not be created by the log file system.",
    "STATUS_LOG_METADATA_INVALID"
  ],
	3222929423: [
    "The log service encountered a metadata file with inconsistent data.",
    "STATUS_LOG_METADATA_INCONSISTENT"
  ],
	3222929424: [
    "The log service encountered an attempt to erroneously allocate or dispose reservation space.",
    "STATUS_LOG_RESERVATION_INVALID"
  ],
	3222929425: [
    "The log service cannot delete the log file or the file system container.",
    "STATUS_LOG_CANT_DELETE"
  ],
	3222929426: [
    "The log service has reached the maximum allowable containers allocated to a log file.",
    "STATUS_LOG_CONTAINER_LIMIT_EXCEEDED"
  ],
	3222929427: [
    "The log service has attempted to read or write backward past the start of the log.",
    "STATUS_LOG_START_OF_LOG"
  ],
	3222929428: [
    "The log policy could not be installed because a policy of the same type is already present.",
    "STATUS_LOG_POLICY_ALREADY_INSTALLED"
  ],
	3222929429: [
    "The log policy in question was not installed at the time of the request.",
    "STATUS_LOG_POLICY_NOT_INSTALLED"
  ],
	3222929430: [
    "The installed set of policies on the log is invalid.",
    "STATUS_LOG_POLICY_INVALID"
  ],
	3222929431: [
    "A policy on the log in question prevented the operation from completing.",
    "STATUS_LOG_POLICY_CONFLICT"
  ],
	3222929432: [
    "The log space cannot be reclaimed because the log is pinned by the archive tail.",
    "STATUS_LOG_PINNED_ARCHIVE_TAIL"
  ],
	3222929433: [
    "The log record is not a record in the log file.",
    "STATUS_LOG_RECORD_NONEXISTENT"
  ],
	3222929434: [
    "The number of reserved log records or the adjustment of the number of reserved log records is invalid.",
    "STATUS_LOG_RECORDS_RESERVED_INVALID"
  ],
	3222929435: [
    "The reserved log space or the adjustment of the log space is invalid.",
    "STATUS_LOG_SPACE_RESERVED_INVALID"
  ],
	3222929436: [
    "A new or existing archive tail or the base of the active log is invalid.",
    "STATUS_LOG_TAIL_INVALID"
  ],
	3222929437: [
    "The log space is exhausted.",
    "STATUS_LOG_FULL"
  ],
	3222929438: [
    "The log is multiplexed; no direct writes to the physical log are allowed.",
    "STATUS_LOG_MULTIPLEXED"
  ],
	3222929439: [
    "The operation failed because the log is dedicated.",
    "STATUS_LOG_DEDICATED"
  ],
	3222929440: [
    "The operation requires an archive context.",
    "STATUS_LOG_ARCHIVE_NOT_IN_PROGRESS"
  ],
	3222929441: [
    "Log archival is in progress.",
    "STATUS_LOG_ARCHIVE_IN_PROGRESS"
  ],
	3222929442: [
    "The operation requires a nonephemeral log, but the log is ephemeral.",
    "STATUS_LOG_EPHEMERAL"
  ],
	3222929443: [
    "The log must have at least two containers before it can be read from or written to.",
    "STATUS_LOG_NOT_ENOUGH_CONTAINERS"
  ],
	3222929444: [
    "A log client has already registered on the stream.",
    "STATUS_LOG_CLIENT_ALREADY_REGISTERED"
  ],
	3222929445: [
    "A log client has not been registered on the stream.",
    "STATUS_LOG_CLIENT_NOT_REGISTERED"
  ],
	3222929446: [
    "A request has already been made to handle the log full condition.",
    "STATUS_LOG_FULL_HANDLER_IN_PROGRESS"
  ],
	3222929447: [
    "The log service encountered an error when attempting to read from a log container.",
    "STATUS_LOG_CONTAINER_READ_FAILED"
  ],
	3222929448: [
    "The log service encountered an error when attempting to write to a log container.",
    "STATUS_LOG_CONTAINER_WRITE_FAILED"
  ],
	3222929449: [
    "The log service encountered an error when attempting to open a log container.",
    "STATUS_LOG_CONTAINER_OPEN_FAILED"
  ],
	3222929450: [
    "The log service encountered an invalid container state when attempting a requested action.",
    "STATUS_LOG_CONTAINER_STATE_INVALID"
  ],
	3222929451: [
    "The log service is not in the correct state to perform a requested action.",
    "STATUS_LOG_STATE_INVALID"
  ],
	3222929452: [
    "The log space cannot be reclaimed because the log is pinned.",
    "STATUS_LOG_PINNED"
  ],
	3222929453: [
    "The log metadata flush failed.",
    "STATUS_LOG_METADATA_FLUSH_FAILED"
  ],
	3222929454: [
    "Security on the log and its containers is inconsistent.",
    "STATUS_LOG_INCONSISTENT_SECURITY"
  ],
	3222929455: [
    "Records were appended to the log or reservation changes were made, but the log could not be flushed.",
    "STATUS_LOG_APPENDED_FLUSH_FAILED"
  ],
	3222929456: [
    "The log is pinned due to reservation consuming most of the log space. Free some reserved records to make space available.",
    "STATUS_LOG_PINNED_RESERVATION"
  ],
	3222995178: [
    "{Display Driver Stopped Responding} The display driver has stopped working normally. Save your work and reboot the system to restore full display functionality. The next time you reboot the computer, a dialog box will allow you to upload data about this failure to Microsoft.",
    "STATUS_VIDEO_HUNG_DISPLAY_DRIVER_THREAD"
  ],
	3223060481: [
    "A handler was not defined by the filter for this operation.",
    "STATUS_FLT_NO_HANDLER_DEFINED"
  ],
	3223060482: [
    "A context is already defined for this object.",
    "STATUS_FLT_CONTEXT_ALREADY_DEFINED"
  ],
	3223060483: [
    "Asynchronous requests are not valid for this operation.",
    "STATUS_FLT_INVALID_ASYNCHRONOUS_REQUEST"
  ],
	3223060484: [
    "This is an internal error code used by the filter manager to determine if a fast I/O operation should be forced down the input/output request packet (IRP) path. Minifilters should never return this value.",
    "STATUS_FLT_DISALLOW_FAST_IO"
  ],
	3223060485: [
    "An invalid name request was made. The name requested cannot be retrieved at this time.",
    "STATUS_FLT_INVALID_NAME_REQUEST"
  ],
	3223060486: [
    "Posting this operation to a worker thread for further processing is not safe at this time because it could lead to a system deadlock.",
    "STATUS_FLT_NOT_SAFE_TO_POST_OPERATION"
  ],
	3223060487: [
    "The Filter Manager was not initialized when a filter tried to register. Make sure that the Filter Manager is loaded as a driver.",
    "STATUS_FLT_NOT_INITIALIZED"
  ],
	3223060488: [
    "The filter is not ready for attachment to volumes because it has not finished initializing (FltStartFiltering has not been called).",
    "STATUS_FLT_FILTER_NOT_READY"
  ],
	3223060489: [
    "The filter must clean up any operation-specific context at this time because it is being removed from the system before the operation is completed by the lower drivers.",
    "STATUS_FLT_POST_OPERATION_CLEANUP"
  ],
	3223060490: [
    "The Filter Manager had an internal error from which it cannot recover; therefore, the operation has failed. This is usually the result of a filter returning an invalid value from a pre-operation callback.",
    "STATUS_FLT_INTERNAL_ERROR"
  ],
	3223060491: [
    "The object specified for this action is in the process of being deleted; therefore, the action requested cannot be completed at this time.",
    "STATUS_FLT_DELETING_OBJECT"
  ],
	3223060492: [
    "A nonpaged pool must be used for this type of context.",
    "STATUS_FLT_MUST_BE_NONPAGED_POOL"
  ],
	3223060493: [
    "A duplicate handler definition has been provided for an operation.",
    "STATUS_FLT_DUPLICATE_ENTRY"
  ],
	3223060494: [
    "The callback data queue has been disabled.",
    "STATUS_FLT_CBDQ_DISABLED"
  ],
	3223060495: [
    "Do not attach the filter to the volume at this time.",
    "STATUS_FLT_DO_NOT_ATTACH"
  ],
	3223060496: [
    "Do not detach the filter from the volume at this time.",
    "STATUS_FLT_DO_NOT_DETACH"
  ],
	3223060497: [
    "An instance already exists at this altitude on the volume specified.",
    "STATUS_FLT_INSTANCE_ALTITUDE_COLLISION"
  ],
	3223060498: [
    "An instance already exists with this name on the volume specified.",
    "STATUS_FLT_INSTANCE_NAME_COLLISION"
  ],
	3223060499: [
    "The system could not find the filter specified.",
    "STATUS_FLT_FILTER_NOT_FOUND"
  ],
	3223060500: [
    "The system could not find the volume specified.",
    "STATUS_FLT_VOLUME_NOT_FOUND"
  ],
	3223060501: [
    "The system could not find the instance specified.",
    "STATUS_FLT_INSTANCE_NOT_FOUND"
  ],
	3223060502: [
    "No registered context allocation definition was found for the given request.",
    "STATUS_FLT_CONTEXT_ALLOCATION_NOT_FOUND"
  ],
	3223060503: [
    "An invalid parameter was specified during context registration.",
    "STATUS_FLT_INVALID_CONTEXT_REGISTRATION"
  ],
	3223060504: [
    "The name requested was not found in the Filter Manager name cache and could not be retrieved from the file system.",
    "STATUS_FLT_NAME_CACHE_MISS"
  ],
	3223060505: [
    "The requested device object does not exist for the given volume.",
    "STATUS_FLT_NO_DEVICE_OBJECT"
  ],
	3223060506: [
    "The specified volume is already mounted.",
    "STATUS_FLT_VOLUME_ALREADY_MOUNTED"
  ],
	3223060507: [
    "The specified transaction context is already enlisted in a transaction.",
    "STATUS_FLT_ALREADY_ENLISTED"
  ],
	3223060508: [
    "The specified context is already attached to another object.",
    "STATUS_FLT_CONTEXT_ALREADY_LINKED"
  ],
	3223060512: [
    "No waiter is present for the filter's reply to this message.",
    "STATUS_FLT_NO_WAITER_FOR_REPLY"
  ],
	3223126017: [
    "A monitor descriptor could not be obtained.",
    "STATUS_MONITOR_NO_DESCRIPTOR"
  ],
	3223126018: [
    "This release does not support the format of the obtained monitor descriptor.",
    "STATUS_MONITOR_UNKNOWN_DESCRIPTOR_FORMAT"
  ],
	3223126019: [
    "The checksum of the obtained monitor descriptor is invalid.",
    "STATUS_MONITOR_INVALID_DESCRIPTOR_CHECKSUM"
  ],
	3223126020: [
    "The monitor descriptor contains an invalid standard timing block.",
    "STATUS_MONITOR_INVALID_STANDARD_TIMING_BLOCK"
  ],
	3223126021: [
    "WMI data-block registration failed for one of the MSMonitorClass WMI subclasses.",
    "STATUS_MONITOR_WMI_DATABLOCK_REGISTRATION_FAILED"
  ],
	3223126022: [
    "The provided monitor descriptor block is either corrupted or does not contain the monitor's detailed serial number.",
    "STATUS_MONITOR_INVALID_SERIAL_NUMBER_MONDSC_BLOCK"
  ],
	3223126023: [
    "The provided monitor descriptor block is either corrupted or does not contain the monitor's user-friendly name.",
    "STATUS_MONITOR_INVALID_USER_FRIENDLY_MONDSC_BLOCK"
  ],
	3223126024: [
    "There is no monitor descriptor data at the specified (offset or size) region.",
    "STATUS_MONITOR_NO_MORE_DESCRIPTOR_DATA"
  ],
	3223126025: [
    "The monitor descriptor contains an invalid detailed timing block.",
    "STATUS_MONITOR_INVALID_DETAILED_TIMING_BLOCK"
  ],
	3223126026: [
    "Monitor descriptor contains invalid manufacture date.",
    "STATUS_MONITOR_INVALID_MANUFACTURE_DATE"
  ],
	3223191552: [
    "Exclusive mode ownership is needed to create an unmanaged primary allocation.",
    "STATUS_GRAPHICS_NOT_EXCLUSIVE_MODE_OWNER"
  ],
	3223191553: [
    "The driver needs more DMA buffer space to complete the requested operation.",
    "STATUS_GRAPHICS_INSUFFICIENT_DMA_BUFFER"
  ],
	3223191554: [
    "The specified display adapter handle is invalid.",
    "STATUS_GRAPHICS_INVALID_DISPLAY_ADAPTER"
  ],
	3223191555: [
    "The specified display adapter and all of its state have been reset.",
    "STATUS_GRAPHICS_ADAPTER_WAS_RESET"
  ],
	3223191556: [
    "The driver stack does not match the expected driver model.",
    "STATUS_GRAPHICS_INVALID_DRIVER_MODEL"
  ],
	3223191557: [
    "Present happened but ended up into the changed desktop mode.",
    "STATUS_GRAPHICS_PRESENT_MODE_CHANGED"
  ],
	3223191558: [
    "Nothing to present due to desktop occlusion.",
    "STATUS_GRAPHICS_PRESENT_OCCLUDED"
  ],
	3223191559: [
    "Not able to present due to denial of desktop access.",
    "STATUS_GRAPHICS_PRESENT_DENIED"
  ],
	3223191560: [
    "Not able to present with color conversion.",
    "STATUS_GRAPHICS_CANNOTCOLORCONVERT"
  ],
	3223191563: [
    "Present redirection is disabled (desktop windowing management subsystem is off).",
    "STATUS_GRAPHICS_PRESENT_REDIRECTION_DISABLED"
  ],
	3223191564: [
    "Previous exclusive VidPn source owner has released its ownership",
    "STATUS_GRAPHICS_PRESENT_UNOCCLUDED"
  ],
	3223191808: [
    "Not enough video memory is available to complete the operation.",
    "STATUS_GRAPHICS_NO_VIDEO_MEMORY"
  ],
	3223191809: [
    "Could not probe and lock the underlying memory of an allocation.",
    "STATUS_GRAPHICS_CANT_LOCK_MEMORY"
  ],
	3223191810: [
    "The allocation is currently busy.",
    "STATUS_GRAPHICS_ALLOCATION_BUSY"
  ],
	3223191811: [
    "An object being referenced has already reached the maximum reference count and cannot be referenced further.",
    "STATUS_GRAPHICS_TOO_MANY_REFERENCES"
  ],
	3223191812: [
    "A problem could not be solved due to an existing condition. Try again later.",
    "STATUS_GRAPHICS_TRY_AGAIN_LATER"
  ],
	3223191813: [
    "A problem could not be solved due to an existing condition. Try again now.",
    "STATUS_GRAPHICS_TRY_AGAIN_NOW"
  ],
	3223191814: [
    "The allocation is invalid.",
    "STATUS_GRAPHICS_ALLOCATION_INVALID"
  ],
	3223191815: [
    "No more unswizzling apertures are currently available.",
    "STATUS_GRAPHICS_UNSWIZZLING_APERTURE_UNAVAILABLE"
  ],
	3223191816: [
    "The current allocation cannot be unswizzled by an aperture.",
    "STATUS_GRAPHICS_UNSWIZZLING_APERTURE_UNSUPPORTED"
  ],
	3223191817: [
    "The request failed because a pinned allocation cannot be evicted.",
    "STATUS_GRAPHICS_CANT_EVICT_PINNED_ALLOCATION"
  ],
	3223191824: [
    "The allocation cannot be used from its current segment location for the specified operation.",
    "STATUS_GRAPHICS_INVALID_ALLOCATION_USAGE"
  ],
	3223191825: [
    "A locked allocation cannot be used in the current command buffer.",
    "STATUS_GRAPHICS_CANT_RENDER_LOCKED_ALLOCATION"
  ],
	3223191826: [
    "The allocation being referenced has been closed permanently.",
    "STATUS_GRAPHICS_ALLOCATION_CLOSED"
  ],
	3223191827: [
    "An invalid allocation instance is being referenced.",
    "STATUS_GRAPHICS_INVALID_ALLOCATION_INSTANCE"
  ],
	3223191828: [
    "An invalid allocation handle is being referenced.",
    "STATUS_GRAPHICS_INVALID_ALLOCATION_HANDLE"
  ],
	3223191829: [
    "The allocation being referenced does not belong to the current device.",
    "STATUS_GRAPHICS_WRONG_ALLOCATION_DEVICE"
  ],
	3223191830: [
    "The specified allocation lost its content.",
    "STATUS_GRAPHICS_ALLOCATION_CONTENT_LOST"
  ],
	3223192064: [
    "A GPU exception was detected on the given device. The device cannot be scheduled.",
    "STATUS_GRAPHICS_GPU_EXCEPTION_ON_DEVICE"
  ],
	3223192320: [
    "The specified VidPN topology is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDPN_TOPOLOGY"
  ],
	3223192321: [
    "The specified VidPN topology is valid but is not supported by this model of the display adapter.",
    "STATUS_GRAPHICS_VIDPN_TOPOLOGY_NOT_SUPPORTED"
  ],
	3223192322: [
    "The specified VidPN topology is valid but is not currently supported by the display adapter due to allocation of its resources.",
    "STATUS_GRAPHICS_VIDPN_TOPOLOGY_CURRENTLY_NOT_SUPPORTED"
  ],
	3223192323: [
    "The specified VidPN handle is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDPN"
  ],
	3223192324: [
    "The specified video present source is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDEO_PRESENT_SOURCE"
  ],
	3223192325: [
    "The specified video present target is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDEO_PRESENT_TARGET"
  ],
	3223192326: [
    "The specified VidPN modality is not supported (for example, at least two of the pinned modes are not co-functional).",
    "STATUS_GRAPHICS_VIDPN_MODALITY_NOT_SUPPORTED"
  ],
	3223192328: [
    "The specified VidPN source mode set is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDPN_SOURCEMODESET"
  ],
	3223192329: [
    "The specified VidPN target mode set is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDPN_TARGETMODESET"
  ],
	3223192330: [
    "The specified video signal frequency is invalid.",
    "STATUS_GRAPHICS_INVALID_FREQUENCY"
  ],
	3223192331: [
    "The specified video signal active region is invalid.",
    "STATUS_GRAPHICS_INVALID_ACTIVE_REGION"
  ],
	3223192332: [
    "The specified video signal total region is invalid.",
    "STATUS_GRAPHICS_INVALID_TOTAL_REGION"
  ],
	3223192336: [
    "The specified video present source mode is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDEO_PRESENT_SOURCE_MODE"
  ],
	3223192337: [
    "The specified video present target mode is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDEO_PRESENT_TARGET_MODE"
  ],
	3223192338: [
    "The pinned mode must remain in the set on the VidPN's co-functional modality enumeration.",
    "STATUS_GRAPHICS_PINNED_MODE_MUST_REMAIN_IN_SET"
  ],
	3223192339: [
    "The specified video present path is already in the VidPN's topology.",
    "STATUS_GRAPHICS_PATH_ALREADY_IN_TOPOLOGY"
  ],
	3223192340: [
    "The specified mode is already in the mode set.",
    "STATUS_GRAPHICS_MODE_ALREADY_IN_MODESET"
  ],
	3223192341: [
    "The specified video present source set is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDEOPRESENTSOURCESET"
  ],
	3223192342: [
    "The specified video present target set is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDEOPRESENTTARGETSET"
  ],
	3223192343: [
    "The specified video present source is already in the video present source set.",
    "STATUS_GRAPHICS_SOURCE_ALREADY_IN_SET"
  ],
	3223192344: [
    "The specified video present target is already in the video present target set.",
    "STATUS_GRAPHICS_TARGET_ALREADY_IN_SET"
  ],
	3223192345: [
    "The specified VidPN present path is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDPN_PRESENT_PATH"
  ],
	3223192346: [
    "The miniport has no recommendation for augmenting the specified VidPN's topology.",
    "STATUS_GRAPHICS_NO_RECOMMENDED_VIDPN_TOPOLOGY"
  ],
	3223192347: [
    "The specified monitor frequency range set is invalid.",
    "STATUS_GRAPHICS_INVALID_MONITOR_FREQUENCYRANGESET"
  ],
	3223192348: [
    "The specified monitor frequency range is invalid.",
    "STATUS_GRAPHICS_INVALID_MONITOR_FREQUENCYRANGE"
  ],
	3223192349: [
    "The specified frequency range is not in the specified monitor frequency range set.",
    "STATUS_GRAPHICS_FREQUENCYRANGE_NOT_IN_SET"
  ],
	3223192351: [
    "The specified frequency range is already in the specified monitor frequency range set.",
    "STATUS_GRAPHICS_FREQUENCYRANGE_ALREADY_IN_SET"
  ],
	3223192352: [
    "The specified mode set is stale. Reacquire the new mode set.",
    "STATUS_GRAPHICS_STALE_MODESET"
  ],
	3223192353: [
    "The specified monitor source mode set is invalid.",
    "STATUS_GRAPHICS_INVALID_MONITOR_SOURCEMODESET"
  ],
	3223192354: [
    "The specified monitor source mode is invalid.",
    "STATUS_GRAPHICS_INVALID_MONITOR_SOURCE_MODE"
  ],
	3223192355: [
    "The miniport does not have a recommendation regarding the request to provide a functional VidPN given the current display adapter configuration.",
    "STATUS_GRAPHICS_NO_RECOMMENDED_FUNCTIONAL_VIDPN"
  ],
	3223192356: [
    "The ID of the specified mode is being used by another mode in the set.",
    "STATUS_GRAPHICS_MODE_ID_MUST_BE_UNIQUE"
  ],
	3223192357: [
    "The system failed to determine a mode that is supported by both the display adapter and the monitor connected to it.",
    "STATUS_GRAPHICS_EMPTY_ADAPTER_MONITOR_MODE_SUPPORT_INTERSECTION"
  ],
	3223192358: [
    "The number of video present targets must be greater than or equal to the number of video present sources.",
    "STATUS_GRAPHICS_VIDEO_PRESENT_TARGETS_LESS_THAN_SOURCES"
  ],
	3223192359: [
    "The specified present path is not in the VidPN's topology.",
    "STATUS_GRAPHICS_PATH_NOT_IN_TOPOLOGY"
  ],
	3223192360: [
    "The display adapter must have at least one video present source.",
    "STATUS_GRAPHICS_ADAPTER_MUST_HAVE_AT_LEAST_ONE_SOURCE"
  ],
	3223192361: [
    "The display adapter must have at least one video present target.",
    "STATUS_GRAPHICS_ADAPTER_MUST_HAVE_AT_LEAST_ONE_TARGET"
  ],
	3223192362: [
    "The specified monitor descriptor set is invalid.",
    "STATUS_GRAPHICS_INVALID_MONITORDESCRIPTORSET"
  ],
	3223192363: [
    "The specified monitor descriptor is invalid.",
    "STATUS_GRAPHICS_INVALID_MONITORDESCRIPTOR"
  ],
	3223192364: [
    "The specified descriptor is not in the specified monitor descriptor set.",
    "STATUS_GRAPHICS_MONITORDESCRIPTOR_NOT_IN_SET"
  ],
	3223192365: [
    "The specified descriptor is already in the specified monitor descriptor set.",
    "STATUS_GRAPHICS_MONITORDESCRIPTOR_ALREADY_IN_SET"
  ],
	3223192366: [
    "The ID of the specified monitor descriptor is being used by another descriptor in the set.",
    "STATUS_GRAPHICS_MONITORDESCRIPTOR_ID_MUST_BE_UNIQUE"
  ],
	3223192367: [
    "The specified video present target subset type is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDPN_TARGET_SUBSET_TYPE"
  ],
	3223192368: [
    "Two or more of the specified resources are not related to each other, as defined by the interface semantics.",
    "STATUS_GRAPHICS_RESOURCES_NOT_RELATED"
  ],
	3223192369: [
    "The ID of the specified video present source is being used by another source in the set.",
    "STATUS_GRAPHICS_SOURCE_ID_MUST_BE_UNIQUE"
  ],
	3223192370: [
    "The ID of the specified video present target is being used by another target in the set.",
    "STATUS_GRAPHICS_TARGET_ID_MUST_BE_UNIQUE"
  ],
	3223192371: [
    "The specified VidPN source cannot be used because there is no available VidPN target to connect it to.",
    "STATUS_GRAPHICS_NO_AVAILABLE_VIDPN_TARGET"
  ],
	3223192372: [
    "The newly arrived monitor could not be associated with a display adapter.",
    "STATUS_GRAPHICS_MONITOR_COULD_NOT_BE_ASSOCIATED_WITH_ADAPTER"
  ],
	3223192373: [
    "The particular display adapter does not have an associated VidPN manager.",
    "STATUS_GRAPHICS_NO_VIDPNMGR"
  ],
	3223192374: [
    "The VidPN manager of the particular display adapter does not have an active VidPN.",
    "STATUS_GRAPHICS_NO_ACTIVE_VIDPN"
  ],
	3223192375: [
    "The specified VidPN topology is stale; obtain the new topology.",
    "STATUS_GRAPHICS_STALE_VIDPN_TOPOLOGY"
  ],
	3223192376: [
    "No monitor is connected on the specified video present target.",
    "STATUS_GRAPHICS_MONITOR_NOT_CONNECTED"
  ],
	3223192377: [
    "The specified source is not part of the specified VidPN's topology.",
    "STATUS_GRAPHICS_SOURCE_NOT_IN_TOPOLOGY"
  ],
	3223192378: [
    "The specified primary surface size is invalid.",
    "STATUS_GRAPHICS_INVALID_PRIMARYSURFACE_SIZE"
  ],
	3223192379: [
    "The specified visible region size is invalid.",
    "STATUS_GRAPHICS_INVALID_VISIBLEREGION_SIZE"
  ],
	3223192380: [
    "The specified stride is invalid.",
    "STATUS_GRAPHICS_INVALID_STRIDE"
  ],
	3223192381: [
    "The specified pixel format is invalid.",
    "STATUS_GRAPHICS_INVALID_PIXELFORMAT"
  ],
	3223192382: [
    "The specified color basis is invalid.",
    "STATUS_GRAPHICS_INVALID_COLORBASIS"
  ],
	3223192383: [
    "The specified pixel value access mode is invalid.",
    "STATUS_GRAPHICS_INVALID_PIXELVALUEACCESSMODE"
  ],
	3223192384: [
    "The specified target is not part of the specified VidPN's topology.",
    "STATUS_GRAPHICS_TARGET_NOT_IN_TOPOLOGY"
  ],
	3223192385: [
    "Failed to acquire the display mode management interface.",
    "STATUS_GRAPHICS_NO_DISPLAY_MODE_MANAGEMENT_SUPPORT"
  ],
	3223192386: [
    "The specified VidPN source is already owned by a DMM client and cannot be used until that client releases it.",
    "STATUS_GRAPHICS_VIDPN_SOURCE_IN_USE"
  ],
	3223192387: [
    "The specified VidPN is active and cannot be accessed.",
    "STATUS_GRAPHICS_CANT_ACCESS_ACTIVE_VIDPN"
  ],
	3223192388: [
    "The specified VidPN's present path importance ordinal is invalid.",
    "STATUS_GRAPHICS_INVALID_PATH_IMPORTANCE_ORDINAL"
  ],
	3223192389: [
    "The specified VidPN's present path content geometry transformation is invalid.",
    "STATUS_GRAPHICS_INVALID_PATH_CONTENT_GEOMETRY_TRANSFORMATION"
  ],
	3223192390: [
    "The specified content geometry transformation is not supported on the respective VidPN present path.",
    "STATUS_GRAPHICS_PATH_CONTENT_GEOMETRY_TRANSFORMATION_NOT_SUPPORTED"
  ],
	3223192391: [
    "The specified gamma ramp is invalid.",
    "STATUS_GRAPHICS_INVALID_GAMMA_RAMP"
  ],
	3223192392: [
    "The specified gamma ramp is not supported on the respective VidPN present path.",
    "STATUS_GRAPHICS_GAMMA_RAMP_NOT_SUPPORTED"
  ],
	3223192393: [
    "Multisampling is not supported on the respective VidPN present path.",
    "STATUS_GRAPHICS_MULTISAMPLING_NOT_SUPPORTED"
  ],
	3223192394: [
    "The specified mode is not in the specified mode set.",
    "STATUS_GRAPHICS_MODE_NOT_IN_MODESET"
  ],
	3223192397: [
    "The specified VidPN topology recommendation reason is invalid.",
    "STATUS_GRAPHICS_INVALID_VIDPN_TOPOLOGY_RECOMMENDATION_REASON"
  ],
	3223192398: [
    "The specified VidPN present path content type is invalid.",
    "STATUS_GRAPHICS_INVALID_PATH_CONTENT_TYPE"
  ],
	3223192399: [
    "The specified VidPN present path copy protection type is invalid.",
    "STATUS_GRAPHICS_INVALID_COPYPROTECTION_TYPE"
  ],
	3223192400: [
    "Only one unassigned mode set can exist at any one time for a particular VidPN source or target.",
    "STATUS_GRAPHICS_UNASSIGNED_MODESET_ALREADY_EXISTS"
  ],
	3223192402: [
    "The specified scan line ordering type is invalid.",
    "STATUS_GRAPHICS_INVALID_SCANLINE_ORDERING"
  ],
	3223192403: [
    "The topology changes are not allowed for the specified VidPN.",
    "STATUS_GRAPHICS_TOPOLOGY_CHANGES_NOT_ALLOWED"
  ],
	3223192404: [
    "All available importance ordinals are being used in the specified topology.",
    "STATUS_GRAPHICS_NO_AVAILABLE_IMPORTANCE_ORDINALS"
  ],
	3223192405: [
    "The specified primary surface has a different private-format attribute than the current primary surface.",
    "STATUS_GRAPHICS_INCOMPATIBLE_PRIVATE_FORMAT"
  ],
	3223192406: [
    "The specified mode-pruning algorithm is invalid.",
    "STATUS_GRAPHICS_INVALID_MODE_PRUNING_ALGORITHM"
  ],
	3223192407: [
    "The specified monitor-capability origin is invalid.",
    "STATUS_GRAPHICS_INVALID_MONITOR_CAPABILITY_ORIGIN"
  ],
	3223192408: [
    "The specified monitor-frequency range constraint is invalid.",
    "STATUS_GRAPHICS_INVALID_MONITOR_FREQUENCYRANGE_CONSTRAINT"
  ],
	3223192409: [
    "The maximum supported number of present paths has been reached.",
    "STATUS_GRAPHICS_MAX_NUM_PATHS_REACHED"
  ],
	3223192410: [
    "The miniport requested that augmentation be canceled for the specified source of the specified VidPN's topology.",
    "STATUS_GRAPHICS_CANCEL_VIDPN_TOPOLOGY_AUGMENTATION"
  ],
	3223192411: [
    "The specified client type was not recognized.",
    "STATUS_GRAPHICS_INVALID_CLIENT_TYPE"
  ],
	3223192412: [
    "The client VidPN is not set on this adapter (for example, no user mode-initiated mode changes have taken place on this adapter).",
    "STATUS_GRAPHICS_CLIENTVIDPN_NOT_SET"
  ],
	3223192576: [
    "The specified display adapter child device already has an external device connected to it.",
    "STATUS_GRAPHICS_SPECIFIED_CHILD_ALREADY_CONNECTED"
  ],
	3223192577: [
    "The display adapter child device does not support reporting a descriptor.",
    "STATUS_GRAPHICS_CHILD_DESCRIPTOR_NOT_SUPPORTED"
  ],
	3223192624: [
    "The display adapter is not linked to any other adapters.",
    "STATUS_GRAPHICS_NOT_A_LINKED_ADAPTER"
  ],
	3223192625: [
    "The lead adapter in a linked configuration was not enumerated yet.",
    "STATUS_GRAPHICS_LEADLINK_NOT_ENUMERATED"
  ],
	3223192626: [
    "Some chain adapters in a linked configuration have not yet been enumerated.",
    "STATUS_GRAPHICS_CHAINLINKS_NOT_ENUMERATED"
  ],
	3223192627: [
    "The chain of linked adapters is not ready to start because of an unknown failure.",
    "STATUS_GRAPHICS_ADAPTER_CHAIN_NOT_READY"
  ],
	3223192628: [
    "An attempt was made to start a lead link display adapter when the chain links had not yet started.",
    "STATUS_GRAPHICS_CHAINLINKS_NOT_STARTED"
  ],
	3223192629: [
    "An attempt was made to turn on a lead link display adapter when the chain links were turned off.",
    "STATUS_GRAPHICS_CHAINLINKS_NOT_POWERED_ON"
  ],
	3223192630: [
    "The adapter link was found in an inconsistent state. Not all adapters are in an expected PNP/power state.",
    "STATUS_GRAPHICS_INCONSISTENT_DEVICE_LINK_STATE"
  ],
	3223192632: [
    "The driver trying to start is not the same as the driver for the posted display adapter.",
    "STATUS_GRAPHICS_NOT_POST_DEVICE_DRIVER"
  ],
	3223192635: [
    "An operation is being attempted that requires the display adapter to be in a quiescent state.",
    "STATUS_GRAPHICS_ADAPTER_ACCESS_NOT_EXCLUDED"
  ],
	3223192832: [
    "The driver does not support OPM.",
    "STATUS_GRAPHICS_OPM_NOT_SUPPORTED"
  ],
	3223192833: [
    "The driver does not support COPP.",
    "STATUS_GRAPHICS_COPP_NOT_SUPPORTED"
  ],
	3223192834: [
    "The driver does not support UAB.",
    "STATUS_GRAPHICS_UAB_NOT_SUPPORTED"
  ],
	3223192835: [
    "The specified encrypted parameters are invalid.",
    "STATUS_GRAPHICS_OPM_INVALID_ENCRYPTED_PARAMETERS"
  ],
	3223192836: [
    "An array passed to a function cannot hold all of the data that the function wants to put in it.",
    "STATUS_GRAPHICS_OPM_PARAMETER_ARRAY_TOO_SMALL"
  ],
	3223192837: [
    "The GDI display device passed to this function does not have any active protected outputs.",
    "STATUS_GRAPHICS_OPM_NO_PROTECTED_OUTPUTS_EXIST"
  ],
	3223192838: [
    "The PVP cannot find an actual GDI display device that corresponds to the passed-in GDI display device name.",
    "STATUS_GRAPHICS_PVP_NO_DISPLAY_DEVICE_CORRESPONDS_TO_NAME"
  ],
	3223192839: [
    "This function failed because the GDI display device passed to it was not attached to the Windows desktop.",
    "STATUS_GRAPHICS_PVP_DISPLAY_DEVICE_NOT_ATTACHED_TO_DESKTOP"
  ],
	3223192840: [
    "The PVP does not support mirroring display devices because they do not have any protected outputs.",
    "STATUS_GRAPHICS_PVP_MIRRORING_DEVICES_NOT_SUPPORTED"
  ],
	3223192842: [
    "The function failed because an invalid pointer parameter was passed to it. A pointer parameter is invalid if it is null, is not correctly aligned, or it points to an invalid address or a kernel mode address.",
    "STATUS_GRAPHICS_OPM_INVALID_POINTER"
  ],
	3223192843: [
    "An internal error caused an operation to fail.",
    "STATUS_GRAPHICS_OPM_INTERNAL_ERROR"
  ],
	3223192844: [
    "The function failed because the caller passed in an invalid OPM user-mode handle.",
    "STATUS_GRAPHICS_OPM_INVALID_HANDLE"
  ],
	3223192845: [
    "This function failed because the GDI device passed to it did not have any monitors associated with it.",
    "STATUS_GRAPHICS_PVP_NO_MONITORS_CORRESPOND_TO_DISPLAY_DEVICE"
  ],
	3223192846: [
    "A certificate could not be returned because the certificate buffer passed to the function was too small.",
    "STATUS_GRAPHICS_PVP_INVALID_CERTIFICATE_LENGTH"
  ],
	3223192847: [
    "DxgkDdiOpmCreateProtectedOutput() could not create a protected output because the video present yarget is in spanning mode.",
    "STATUS_GRAPHICS_OPM_SPANNING_MODE_ENABLED"
  ],
	3223192848: [
    "DxgkDdiOpmCreateProtectedOutput() could not create a protected output because the video present target is in theater mode.",
    "STATUS_GRAPHICS_OPM_THEATER_MODE_ENABLED"
  ],
	3223192849: [
    "The function call failed because the display adapter's hardware functionality scan (HFS) failed to validate the graphics hardware.",
    "STATUS_GRAPHICS_PVP_HFS_FAILED"
  ],
	3223192850: [
    "The HDCP SRM passed to this function did not comply with section 5 of the HDCP 1.1 specification.",
    "STATUS_GRAPHICS_OPM_INVALID_SRM"
  ],
	3223192851: [
    "The protected output cannot enable the HDCP system because it does not support it.",
    "STATUS_GRAPHICS_OPM_OUTPUT_DOES_NOT_SUPPORT_HDCP"
  ],
	3223192852: [
    "The protected output cannot enable analog copy protection because it does not support it.",
    "STATUS_GRAPHICS_OPM_OUTPUT_DOES_NOT_SUPPORT_ACP"
  ],
	3223192853: [
    "The protected output cannot enable the CGMS-A protection technology because it does not support it.",
    "STATUS_GRAPHICS_OPM_OUTPUT_DOES_NOT_SUPPORT_CGMSA"
  ],
	3223192854: [
    "DxgkDdiOPMGetInformation() cannot return the version of the SRM being used because the application never successfully passed an SRM to the protected output.",
    "STATUS_GRAPHICS_OPM_HDCP_SRM_NEVER_SET"
  ],
	3223192855: [
    "DxgkDdiOPMConfigureProtectedOutput() cannot enable the specified output protection technology because the output's screen resolution is too high.",
    "STATUS_GRAPHICS_OPM_RESOLUTION_TOO_HIGH"
  ],
	3223192856: [
    "DxgkDdiOPMConfigureProtectedOutput() cannot enable HDCP because other physical outputs are using the display adapter's HDCP hardware.",
    "STATUS_GRAPHICS_OPM_ALL_HDCP_HARDWARE_ALREADY_IN_USE"
  ],
	3223192858: [
    "The operating system asynchronously destroyed this OPM-protected output because the operating system state changed. This error typically occurs because the monitor PDO associated with this protected output was removed or stopped, the protected output's session became a nonconsole session, or the protected output's desktop became inactive.",
    "STATUS_GRAPHICS_OPM_PROTECTED_OUTPUT_NO_LONGER_EXISTS"
  ],
	3223192859: [
    "OPM functions cannot be called when a session is changing its type. Three types of sessions currently exist: console, disconnected, and remote (RDP or ICA).",
    "STATUS_GRAPHICS_OPM_SESSION_TYPE_CHANGE_IN_PROGRESS"
  ],
	3223192860: [
    "The DxgkDdiOPMGetCOPPCompatibleInformation, DxgkDdiOPMGetInformation, or DxgkDdiOPMConfigureProtectedOutput function failed. This error is returned only if a protected output has OPM semantics. ",
    "STATUS_GRAPHICS_OPM_PROTECTED_OUTPUT_DOES_NOT_HAVE_COPP_SEMANTICS"
  ],
	3223192861: [
    "The DxgkDdiOPMGetInformation and DxgkDdiOPMGetCOPPCompatibleInformation functions return this error code if the passed-in sequence number is not the expected sequence number or the passed-in OMAC value is invalid.",
    "STATUS_GRAPHICS_OPM_INVALID_INFORMATION_REQUEST"
  ],
	3223192862: [
    "The function failed because an unexpected error occurred inside a display driver.",
    "STATUS_GRAPHICS_OPM_DRIVER_INTERNAL_ERROR"
  ],
	3223192863: [
    "The DxgkDdiOPMGetCOPPCompatibleInformation, DxgkDdiOPMGetInformation, or DxgkDdiOPMConfigureProtectedOutput function failed. This error is returned only if a protected output has COPP semantics. ",
    "STATUS_GRAPHICS_OPM_PROTECTED_OUTPUT_DOES_NOT_HAVE_OPM_SEMANTICS"
  ],
	3223192864: [
    "The DxgkDdiOPMGetCOPPCompatibleInformation and DxgkDdiOPMConfigureProtectedOutput functions return this error if the display driver does not support the DXGKMDT_OPM_GET_ACP_AND_CGMSA_SIGNALING and DXGKMDT_OPM_SET_ACP_AND_CGMSA_SIGNALING GUIDs.",
    "STATUS_GRAPHICS_OPM_SIGNALING_NOT_SUPPORTED"
  ],
	3223192865: [
    "The DxgkDdiOPMConfigureProtectedOutput function returns this error code if the passed-in sequence number is not the expected sequence number or the passed-in OMAC value is invalid.",
    "STATUS_GRAPHICS_OPM_INVALID_CONFIGURATION_REQUEST"
  ],
	3223192960: [
    "The monitor connected to the specified video output does not have an I2C bus.",
    "STATUS_GRAPHICS_I2C_NOT_SUPPORTED"
  ],
	3223192961: [
    "No device on the I2C bus has the specified address.",
    "STATUS_GRAPHICS_I2C_DEVICE_DOES_NOT_EXIST"
  ],
	3223192962: [
    "An error occurred while transmitting data to the device on the I2C bus.",
    "STATUS_GRAPHICS_I2C_ERROR_TRANSMITTING_DATA"
  ],
	3223192963: [
    "An error occurred while receiving data from the device on the I2C bus.",
    "STATUS_GRAPHICS_I2C_ERROR_RECEIVING_DATA"
  ],
	3223192964: [
    "The monitor does not support the specified VCP code.",
    "STATUS_GRAPHICS_DDCCI_VCP_NOT_SUPPORTED"
  ],
	3223192965: [
    "The data received from the monitor is invalid.",
    "STATUS_GRAPHICS_DDCCI_INVALID_DATA"
  ],
	3223192966: [
    "A function call failed because a monitor returned an invalid timing status byte when the operating system used the DDC/CI get timing report and timing message command to get a timing report from a monitor.",
    "STATUS_GRAPHICS_DDCCI_MONITOR_RETURNED_INVALID_TIMING_STATUS_BYTE"
  ],
	3223192967: [
    "A monitor returned a DDC/CI capabilities string that did not comply with the ACCESS.bus 3.0, DDC/CI 1.1, or MCCS 2 Revision 1 specification.",
    "STATUS_GRAPHICS_DDCCI_INVALID_CAPABILITIES_STRING"
  ],
	3223192968: [
    "An internal error caused an operation to fail.",
    "STATUS_GRAPHICS_MCA_INTERNAL_ERROR"
  ],
	3223192969: [
    "An operation failed because a DDC/CI message had an invalid value in its command field.",
    "STATUS_GRAPHICS_DDCCI_INVALID_MESSAGE_COMMAND"
  ],
	3223192970: [
    "This error occurred because a DDC/CI message had an invalid value in its length field.",
    "STATUS_GRAPHICS_DDCCI_INVALID_MESSAGE_LENGTH"
  ],
	3223192971: [
    "This error occurred because the value in a DDC/CI message's checksum field did not match the message's computed checksum value. This error implies that the data was corrupted while it was being transmitted from a monitor to a computer.",
    "STATUS_GRAPHICS_DDCCI_INVALID_MESSAGE_CHECKSUM"
  ],
	3223192972: [
    "This function failed because an invalid monitor handle was passed to it.",
    "STATUS_GRAPHICS_INVALID_PHYSICAL_MONITOR_HANDLE"
  ],
	3223192973: [
    "The operating system asynchronously destroyed the monitor that corresponds to this handle because the operating system's state changed. This error typically occurs because the monitor PDO associated with this handle was removed or stopped, or a display mode change occurred. A display mode change occurs when Windows sends a WM_DISPLAYCHANGE message to applications.",
    "STATUS_GRAPHICS_MONITOR_NO_LONGER_EXISTS"
  ],
	3223193056: [
    "This function can be used only if a program is running in the local console session. It cannot be used if a program is running on a remote desktop session or on a terminal server session.",
    "STATUS_GRAPHICS_ONLY_CONSOLE_SESSION_SUPPORTED"
  ],
	3223193057: [
    "This function cannot find an actual GDI display device that corresponds to the specified GDI display device name.",
    "STATUS_GRAPHICS_NO_DISPLAY_DEVICE_CORRESPONDS_TO_NAME"
  ],
	3223193058: [
    "The function failed because the specified GDI display device was not attached to the Windows desktop.",
    "STATUS_GRAPHICS_DISPLAY_DEVICE_NOT_ATTACHED_TO_DESKTOP"
  ],
	3223193059: [
    "This function does not support GDI mirroring display devices because GDI mirroring display devices do not have any physical monitors associated with them.",
    "STATUS_GRAPHICS_MIRRORING_DEVICES_NOT_SUPPORTED"
  ],
	3223193060: [
    "The function failed because an invalid pointer parameter was passed to it. A pointer parameter is invalid if it is null, is not correctly aligned, or points to an invalid address or to a kernel mode address.",
    "STATUS_GRAPHICS_INVALID_POINTER"
  ],
	3223193061: [
    "This function failed because the GDI device passed to it did not have a monitor associated with it.",
    "STATUS_GRAPHICS_NO_MONITORS_CORRESPOND_TO_DISPLAY_DEVICE"
  ],
	3223193062: [
    "An array passed to the function cannot hold all of the data that the function must copy into the array.",
    "STATUS_GRAPHICS_PARAMETER_ARRAY_TOO_SMALL"
  ],
	3223193063: [
    "An internal error caused an operation to fail.",
    "STATUS_GRAPHICS_INTERNAL_ERROR"
  ],
	3223193064: [
    "The function failed because the current session is changing its type. This function cannot be called when the current session is changing its type. Three types of sessions currently exist: console, disconnected, and remote (RDP or ICA).",
    "STATUS_GRAPHICS_SESSION_TYPE_CHANGE_IN_PROGRESS"
  ],
	3223388160: [
    "The volume must be unlocked before it can be used.",
    "STATUS_FVE_LOCKED_VOLUME"
  ],
	3223388161: [
    "The volume is fully decrypted and no key is available.",
    "STATUS_FVE_NOT_ENCRYPTED"
  ],
	3223388162: [
    "The control block for the encrypted volume is not valid.",
    "STATUS_FVE_BAD_INFORMATION"
  ],
	3223388163: [
    "Not enough free space remains on the volume to allow encryption.",
    "STATUS_FVE_TOO_SMALL"
  ],
	3223388164: [
    "The partition cannot be encrypted because the file system is not supported.",
    "STATUS_FVE_FAILED_WRONG_FS"
  ],
	3223388165: [
    "The file system is inconsistent. Run the Check Disk utility.",
    "STATUS_FVE_FAILED_BAD_FS"
  ],
	3223388166: [
    "The file system does not extend to the end of the volume.",
    "STATUS_FVE_FS_NOT_EXTENDED"
  ],
	3223388167: [
    "This operation cannot be performed while a file system is mounted on the volume.",
    "STATUS_FVE_FS_MOUNTED"
  ],
	3223388168: [
    "BitLocker Drive Encryption is not included with this version of Windows.",
    "STATUS_FVE_NO_LICENSE"
  ],
	3223388169: [
    "The requested action was denied by the FVE control engine.",
    "STATUS_FVE_ACTION_NOT_ALLOWED"
  ],
	3223388170: [
    "The data supplied is malformed.",
    "STATUS_FVE_BAD_DATA"
  ],
	3223388171: [
    "The volume is not bound to the system.",
    "STATUS_FVE_VOLUME_NOT_BOUND"
  ],
	3223388172: [
    "The volume specified is not a data volume.",
    "STATUS_FVE_NOT_DATA_VOLUME"
  ],
	3223388173: [
    "A read operation failed while converting the volume.",
    "STATUS_FVE_CONV_READ_ERROR"
  ],
	3223388174: [
    "A write operation failed while converting the volume.",
    "STATUS_FVE_CONV_WRITE_ERROR"
  ],
	3223388175: [
    "The control block for the encrypted volume was updated by another thread. Try again.",
    "STATUS_FVE_OVERLAPPED_UPDATE"
  ],
	3223388176: [
    "The volume encryption algorithm cannot be used on this sector size.",
    "STATUS_FVE_FAILED_SECTOR_SIZE"
  ],
	3223388177: [
    "BitLocker recovery authentication failed.",
    "STATUS_FVE_FAILED_AUTHENTICATION"
  ],
	3223388178: [
    "The volume specified is not the boot operating system volume.",
    "STATUS_FVE_NOT_OS_VOLUME"
  ],
	3223388179: [
    "The BitLocker startup key or recovery password could not be read from external media.",
    "STATUS_FVE_KEYFILE_NOT_FOUND"
  ],
	3223388180: [
    "The BitLocker startup key or recovery password file is corrupt or invalid.",
    "STATUS_FVE_KEYFILE_INVALID"
  ],
	3223388181: [
    "The BitLocker encryption key could not be obtained from the startup key or the recovery password.",
    "STATUS_FVE_KEYFILE_NO_VMK"
  ],
	3223388182: [
    "The TPM is disabled.",
    "STATUS_FVE_TPM_DISABLED"
  ],
	3223388183: [
    "The authorization data for the SRK of the TPM is not zero.",
    "STATUS_FVE_TPM_SRK_AUTH_NOT_ZERO"
  ],
	3223388184: [
    "The system boot information changed or the TPM locked out access to BitLocker encryption keys until the computer is restarted.",
    "STATUS_FVE_TPM_INVALID_PCR"
  ],
	3223388185: [
    "The BitLocker encryption key could not be obtained from the TPM.",
    "STATUS_FVE_TPM_NO_VMK"
  ],
	3223388186: [
    "The BitLocker encryption key could not be obtained from the TPM and PIN.",
    "STATUS_FVE_PIN_INVALID"
  ],
	3223388187: [
    "A boot application hash does not match the hash computed when BitLocker was turned on.",
    "STATUS_FVE_AUTH_INVALID_APPLICATION"
  ],
	3223388188: [
    "The Boot Configuration Data (BCD) settings are not supported or have changed because BitLocker was enabled.",
    "STATUS_FVE_AUTH_INVALID_CONFIG"
  ],
	3223388189: [
    "Boot debugging is enabled. Run Windows Boot Configuration Data Store Editor (bcdedit.exe) to turn it off.",
    "STATUS_FVE_DEBUGGER_ENABLED"
  ],
	3223388190: [
    "The BitLocker encryption key could not be obtained.",
    "STATUS_FVE_DRY_RUN_FAILED"
  ],
	3223388191: [
    "The metadata disk region pointer is incorrect.",
    "STATUS_FVE_BAD_METADATA_POINTER"
  ],
	3223388192: [
    "The backup copy of the metadata is out of date.",
    "STATUS_FVE_OLD_METADATA_COPY"
  ],
	3223388193: [
    "No action was taken because a system restart is required.",
    "STATUS_FVE_REBOOT_REQUIRED"
  ],
	3223388194: [
    "No action was taken because BitLocker Drive Encryption is in RAW access mode.",
    "STATUS_FVE_RAW_ACCESS"
  ],
	3223388195: [
    "BitLocker Drive Encryption cannot enter RAW access mode for this volume.",
    "STATUS_FVE_RAW_BLOCKED"
  ],
	3223388198: [
    "This feature of BitLocker Drive Encryption is not included with this version of Windows.",
    "STATUS_FVE_NO_FEATURE_LICENSE"
  ],
	3223388199: [
    "Group policy does not permit turning off BitLocker Drive Encryption on roaming data volumes.",
    "STATUS_FVE_POLICY_USER_DISABLE_RDV_NOT_ALLOWED"
  ],
	3223388200: [
    "Bitlocker Drive Encryption failed to recover from aborted conversion. This could be due to either all conversion logs being corrupted or the media being write-protected.",
    "STATUS_FVE_CONV_RECOVERY_FAILED"
  ],
	3223388201: [
    "The requested virtualization size is too big.",
    "STATUS_FVE_VIRTUALIZED_SPACE_TOO_BIG"
  ],
	3223388208: [
    "The drive is too small to be protected using BitLocker Drive Encryption.",
    "STATUS_FVE_VOLUME_TOO_SMALL"
  ],
	3223453697: [
    "The callout does not exist.",
    "STATUS_FWP_CALLOUT_NOT_FOUND"
  ],
	3223453698: [
    "The filter condition does not exist.",
    "STATUS_FWP_CONDITION_NOT_FOUND"
  ],
	3223453699: [
    "The filter does not exist.",
    "STATUS_FWP_FILTER_NOT_FOUND"
  ],
	3223453700: [
    "The layer does not exist.",
    "STATUS_FWP_LAYER_NOT_FOUND"
  ],
	3223453701: [
    "The provider does not exist.",
    "STATUS_FWP_PROVIDER_NOT_FOUND"
  ],
	3223453702: [
    "The provider context does not exist.",
    "STATUS_FWP_PROVIDER_CONTEXT_NOT_FOUND"
  ],
	3223453703: [
    "The sublayer does not exist.",
    "STATUS_FWP_SUBLAYER_NOT_FOUND"
  ],
	3223453704: [
    "The object does not exist.",
    "STATUS_FWP_NOT_FOUND"
  ],
	3223453705: [
    "An object with that GUID or LUID already exists.",
    "STATUS_FWP_ALREADY_EXISTS"
  ],
	3223453706: [
    "The object is referenced by other objects and cannot be deleted.",
    "STATUS_FWP_IN_USE"
  ],
	3223453707: [
    "The call is not allowed from within a dynamic session.",
    "STATUS_FWP_DYNAMIC_SESSION_IN_PROGRESS"
  ],
	3223453708: [
    "The call was made from the wrong session and cannot be completed.",
    "STATUS_FWP_WRONG_SESSION"
  ],
	3223453709: [
    "The call must be made from within an explicit transaction.",
    "STATUS_FWP_NO_TXN_IN_PROGRESS"
  ],
	3223453710: [
    "The call is not allowed from within an explicit transaction.",
    "STATUS_FWP_TXN_IN_PROGRESS"
  ],
	3223453711: [
    "The explicit transaction has been forcibly canceled.",
    "STATUS_FWP_TXN_ABORTED"
  ],
	3223453712: [
    "The session has been canceled.",
    "STATUS_FWP_SESSION_ABORTED"
  ],
	3223453713: [
    "The call is not allowed from within a read-only transaction.",
    "STATUS_FWP_INCOMPATIBLE_TXN"
  ],
	3223453714: [
    "The call timed out while waiting to acquire the transaction lock.",
    "STATUS_FWP_TIMEOUT"
  ],
	3223453715: [
    "The collection of network diagnostic events is disabled.",
    "STATUS_FWP_NET_EVENTS_DISABLED"
  ],
	3223453716: [
    "The operation is not supported by the specified layer.",
    "STATUS_FWP_INCOMPATIBLE_LAYER"
  ],
	3223453717: [
    "The call is allowed for kernel-mode callers only.",
    "STATUS_FWP_KM_CLIENTS_ONLY"
  ],
	3223453718: [
    "The call tried to associate two objects with incompatible lifetimes.",
    "STATUS_FWP_LIFETIME_MISMATCH"
  ],
	3223453719: [
    "The object is built-in and cannot be deleted.",
    "STATUS_FWP_BUILTIN_OBJECT"
  ],
	3223453720: [
    "The maximum number of callouts has been reached.",
    "STATUS_FWP_TOO_MANY_CALLOUTS"
  ],
	3223453721: [
    "A notification could not be delivered because a message queue has reached maximum capacity.",
    "STATUS_FWP_NOTIFICATION_DROPPED"
  ],
	3223453722: [
    "The traffic parameters do not match those for the security association context.",
    "STATUS_FWP_TRAFFIC_MISMATCH"
  ],
	3223453723: [
    "The call is not allowed for the current security association state.",
    "STATUS_FWP_INCOMPATIBLE_SA_STATE"
  ],
	3223453724: [
    "A required pointer is null.",
    "STATUS_FWP_NULL_POINTER"
  ],
	3223453725: [
    "An enumerator is not valid.",
    "STATUS_FWP_INVALID_ENUMERATOR"
  ],
	3223453726: [
    "The flags field contains an invalid value.",
    "STATUS_FWP_INVALID_FLAGS"
  ],
	3223453727: [
    "A network mask is not valid.",
    "STATUS_FWP_INVALID_NET_MASK"
  ],
	3223453728: [
    "An FWP_RANGE is not valid.",
    "STATUS_FWP_INVALID_RANGE"
  ],
	3223453729: [
    "The time interval is not valid.",
    "STATUS_FWP_INVALID_INTERVAL"
  ],
	3223453730: [
    "An array that must contain at least one element has a zero length.",
    "STATUS_FWP_ZERO_LENGTH_ARRAY"
  ],
	3223453731: [
    "The displayData.name field cannot be null.",
    "STATUS_FWP_NULL_DISPLAY_NAME"
  ],
	3223453732: [
    "The action type is not one of the allowed action types for a filter.",
    "STATUS_FWP_INVALID_ACTION_TYPE"
  ],
	3223453733: [
    "The filter weight is not valid.",
    "STATUS_FWP_INVALID_WEIGHT"
  ],
	3223453734: [
    "A filter condition contains a match type that is not compatible with the operands.",
    "STATUS_FWP_MATCH_TYPE_MISMATCH"
  ],
	3223453735: [
    "An FWP_VALUE or FWPM_CONDITION_VALUE is of the wrong type.",
    "STATUS_FWP_TYPE_MISMATCH"
  ],
	3223453736: [
    "An integer value is outside the allowed range.",
    "STATUS_FWP_OUT_OF_BOUNDS"
  ],
	3223453737: [
    "A reserved field is nonzero.",
    "STATUS_FWP_RESERVED"
  ],
	3223453738: [
    "A filter cannot contain multiple conditions operating on a single field.",
    "STATUS_FWP_DUPLICATE_CONDITION"
  ],
	3223453739: [
    "A policy cannot contain the same keying module more than once.",
    "STATUS_FWP_DUPLICATE_KEYMOD"
  ],
	3223453740: [
    "The action type is not compatible with the layer.",
    "STATUS_FWP_ACTION_INCOMPATIBLE_WITH_LAYER"
  ],
	3223453741: [
    "The action type is not compatible with the sublayer.",
    "STATUS_FWP_ACTION_INCOMPATIBLE_WITH_SUBLAYER"
  ],
	3223453742: [
    "The raw context or the provider context is not compatible with the layer.",
    "STATUS_FWP_CONTEXT_INCOMPATIBLE_WITH_LAYER"
  ],
	3223453743: [
    "The raw context or the provider context is not compatible with the callout.",
    "STATUS_FWP_CONTEXT_INCOMPATIBLE_WITH_CALLOUT"
  ],
	3223453744: [
    "The authentication method is not compatible with the policy type.",
    "STATUS_FWP_INCOMPATIBLE_AUTH_METHOD"
  ],
	3223453745: [
    "The Diffie-Hellman group is not compatible with the policy type.",
    "STATUS_FWP_INCOMPATIBLE_DH_GROUP"
  ],
	3223453746: [
    "An IKE policy cannot contain an Extended Mode policy.",
    "STATUS_FWP_EM_NOT_SUPPORTED"
  ],
	3223453747: [
    "The enumeration template or subscription will never match any objects.",
    "STATUS_FWP_NEVER_MATCH"
  ],
	3223453748: [
    "The provider context is of the wrong type.",
    "STATUS_FWP_PROVIDER_CONTEXT_MISMATCH"
  ],
	3223453749: [
    "The parameter is incorrect.",
    "STATUS_FWP_INVALID_PARAMETER"
  ],
	3223453750: [
    "The maximum number of sublayers has been reached.",
    "STATUS_FWP_TOO_MANY_SUBLAYERS"
  ],
	3223453751: [
    "The notification function for a callout returned an error.",
    "STATUS_FWP_CALLOUT_NOTIFICATION_FAILED"
  ],
	3223453752: [
    "The IPsec authentication configuration is not compatible with the authentication type.",
    "STATUS_FWP_INCOMPATIBLE_AUTH_CONFIG"
  ],
	3223453753: [
    "The IPsec cipher configuration is not compatible with the cipher type.",
    "STATUS_FWP_INCOMPATIBLE_CIPHER_CONFIG"
  ],
	3223453756: [
    "A policy cannot contain the same auth method more than once.",
    "STATUS_FWP_DUPLICATE_AUTH_METHOD"
  ],
	3223453952: [
    "The TCP/IP stack is not ready.",
    "STATUS_FWP_TCPIP_NOT_READY"
  ],
	3223453953: [
    "The injection handle is being closed by another thread.",
    "STATUS_FWP_INJECT_HANDLE_CLOSING"
  ],
	3223453954: [
    "The injection handle is stale.",
    "STATUS_FWP_INJECT_HANDLE_STALE"
  ],
	3223453955: [
    "The classify cannot be pended.",
    "STATUS_FWP_CANNOT_PEND"
  ],
	3223519234: [
    "The binding to the network interface is being closed.",
    "STATUS_NDIS_CLOSING"
  ],
	3223519236: [
    "An invalid version was specified.",
    "STATUS_NDIS_BAD_VERSION"
  ],
	3223519237: [
    "An invalid characteristics table was used.",
    "STATUS_NDIS_BAD_CHARACTERISTICS"
  ],
	3223519238: [
    "Failed to find the network interface or the network interface is not ready.",
    "STATUS_NDIS_ADAPTER_NOT_FOUND"
  ],
	3223519239: [
    "Failed to open the network interface.",
    "STATUS_NDIS_OPEN_FAILED"
  ],
	3223519240: [
    "The network interface has encountered an internal unrecoverable failure.",
    "STATUS_NDIS_DEVICE_FAILED"
  ],
	3223519241: [
    "The multicast list on the network interface is full.",
    "STATUS_NDIS_MULTICAST_FULL"
  ],
	3223519242: [
    "An attempt was made to add a duplicate multicast address to the list.",
    "STATUS_NDIS_MULTICAST_EXISTS"
  ],
	3223519243: [
    "At attempt was made to remove a multicast address that was never added.",
    "STATUS_NDIS_MULTICAST_NOT_FOUND"
  ],
	3223519244: [
    "The network interface aborted the request.",
    "STATUS_NDIS_REQUEST_ABORTED"
  ],
	3223519245: [
    "The network interface cannot process the request because it is being reset.",
    "STATUS_NDIS_RESET_IN_PROGRESS"
  ],
	3223519247: [
    "An attempt was made to send an invalid packet on a network interface.",
    "STATUS_NDIS_INVALID_PACKET"
  ],
	3223519248: [
    "The specified request is not a valid operation for the target device.",
    "STATUS_NDIS_INVALID_DEVICE_REQUEST"
  ],
	3223519249: [
    "The network interface is not ready to complete this operation.",
    "STATUS_NDIS_ADAPTER_NOT_READY"
  ],
	3223519252: [
    "The length of the buffer submitted for this operation is not valid.",
    "STATUS_NDIS_INVALID_LENGTH"
  ],
	3223519253: [
    "The data used for this operation is not valid.",
    "STATUS_NDIS_INVALID_DATA"
  ],
	3223519254: [
    "The length of the submitted buffer for this operation is too small.",
    "STATUS_NDIS_BUFFER_TOO_SHORT"
  ],
	3223519255: [
    "The network interface does not support this object identifier.",
    "STATUS_NDIS_INVALID_OID"
  ],
	3223519256: [
    "The network interface has been removed.",
    "STATUS_NDIS_ADAPTER_REMOVED"
  ],
	3223519257: [
    "The network interface does not support this media type.",
    "STATUS_NDIS_UNSUPPORTED_MEDIA"
  ],
	3223519258: [
    "An attempt was made to remove a token ring group address that is in use by other components.",
    "STATUS_NDIS_GROUP_ADDRESS_IN_USE"
  ],
	3223519259: [
    "An attempt was made to map a file that cannot be found.",
    "STATUS_NDIS_FILE_NOT_FOUND"
  ],
	3223519260: [
    "An error occurred while NDIS tried to map the file.",
    "STATUS_NDIS_ERROR_READING_FILE"
  ],
	3223519261: [
    "An attempt was made to map a file that is already mapped.",
    "STATUS_NDIS_ALREADY_MAPPED"
  ],
	3223519262: [
    "An attempt to allocate a hardware resource failed because the resource is used by another component.",
    "STATUS_NDIS_RESOURCE_CONFLICT"
  ],
	3223519263: [
    "The I/O operation failed because the network media is disconnected or the wireless access point is out of range.",
    "STATUS_NDIS_MEDIA_DISCONNECTED"
  ],
	3223519266: [
    "The network address used in the request is invalid.",
    "STATUS_NDIS_INVALID_ADDRESS"
  ],
	3223519274: [
    "The offload operation on the network interface has been paused.",
    "STATUS_NDIS_PAUSED"
  ],
	3223519275: [
    "The network interface was not found.",
    "STATUS_NDIS_INTERFACE_NOT_FOUND"
  ],
	3223519276: [
    "The revision number specified in the structure is not supported.",
    "STATUS_NDIS_UNSUPPORTED_REVISION"
  ],
	3223519277: [
    "The specified port does not exist on this network interface.",
    "STATUS_NDIS_INVALID_PORT"
  ],
	3223519278: [
    "The current state of the specified port on this network interface does not support the requested operation.",
    "STATUS_NDIS_INVALID_PORT_STATE"
  ],
	3223519279: [
    "The miniport adapter is in a lower power state.",
    "STATUS_NDIS_LOW_POWER_STATE"
  ],
	3223519419: [
    "The network interface does not support this request.",
    "STATUS_NDIS_NOT_SUPPORTED"
  ],
	3223523343: [
    "The TCP connection is not offloadable because of a local policy setting.",
    "STATUS_NDIS_OFFLOAD_POLICY"
  ],
	3223523346: [
    "The TCP connection is not offloadable by the Chimney offload target.",
    "STATUS_NDIS_OFFLOAD_CONNECTION_REJECTED"
  ],
	3223523347: [
    "The IP Path object is not in an offloadable state.",
    "STATUS_NDIS_OFFLOAD_PATH_REJECTED"
  ],
	3223527424: [
    "The wireless LAN interface is in auto-configuration mode and does not support the requested parameter change operation.",
    "STATUS_NDIS_DOT11_AUTO_CONFIG_ENABLED"
  ],
	3223527425: [
    "The wireless LAN interface is busy and cannot perform the requested operation.",
    "STATUS_NDIS_DOT11_MEDIA_IN_USE"
  ],
	3223527426: [
    "The wireless LAN interface is power down and does not support the requested operation.",
    "STATUS_NDIS_DOT11_POWER_STATE_INVALID"
  ],
	3223527427: [
    "The list of wake on LAN patterns is full.",
    "STATUS_NDIS_PM_WOL_PATTERN_LIST_FULL"
  ],
	3223527428: [
    "The list of low power protocol offloads is full.",
    "STATUS_NDIS_PM_PROTOCOL_OFFLOAD_LIST_FULL"
  ],
	3224764417: [
    "The SPI in the packet does not match a valid IPsec SA.",
    "STATUS_IPSEC_BAD_SPI"
  ],
	3224764418: [
    "The packet was received on an IPsec SA whose lifetime has expired.",
    "STATUS_IPSEC_SA_LIFETIME_EXPIRED"
  ],
	3224764419: [
    "The packet was received on an IPsec SA that does not match the packet characteristics.",
    "STATUS_IPSEC_WRONG_SA"
  ],
	3224764420: [
    "The packet sequence number replay check failed.",
    "STATUS_IPSEC_REPLAY_CHECK_FAILED"
  ],
	3224764421: [
    "The IPsec header and/or trailer in the packet is invalid.",
    "STATUS_IPSEC_INVALID_PACKET"
  ],
	3224764422: [
    "The IPsec integrity check failed.",
    "STATUS_IPSEC_INTEGRITY_CHECK_FAILED"
  ],
	3224764423: [
    "IPsec dropped a clear text packet.",
    "STATUS_IPSEC_CLEAR_TEXT_DROP"
  ],
	3224764424: [
    "IPsec dropped an incoming ESP packet in authenticated firewall mode.  This drop is benign.",
    "STATUS_IPSEC_AUTH_FIREWALL_DROP"
  ],
	3224764425: [
    "IPsec dropped a packet due to DOS throttle.",
    "STATUS_IPSEC_THROTTLE_DROP"
  ],
	3224797184: [
    "IPsec Dos Protection matched an explicit block rule.",
    "STATUS_IPSEC_DOSP_BLOCK"
  ],
	3224797185: [
    "IPsec Dos Protection received an IPsec specific multicast packet which is not allowed.",
    "STATUS_IPSEC_DOSP_RECEIVED_MULTICAST"
  ],
	3224797186: [
    "IPsec Dos Protection received an incorrectly formatted packet.",
    "STATUS_IPSEC_DOSP_INVALID_PACKET"
  ],
	3224797187: [
    "IPsec Dos Protection failed to lookup state.",
    "STATUS_IPSEC_DOSP_STATE_LOOKUP_FAILED"
  ],
	3224797188: [
    "IPsec Dos Protection failed to create state because there are already maximum number of entries allowed by policy.",
    "STATUS_IPSEC_DOSP_MAX_ENTRIES"
  ],
	3224797189: [
    "IPsec Dos Protection received an IPsec negotiation packet for a keying module which is not allowed by policy.",
    "STATUS_IPSEC_DOSP_KEYMOD_NOT_ALLOWED"
  ],
	3224797190: [
    "IPsec Dos Protection failed to create per internal IP ratelimit queue because there is already maximum number of queues allowed by policy.",
    "STATUS_IPSEC_DOSP_MAX_PER_IP_RATELIMIT_QUEUES"
  ],
	3224895579: [
    "The system does not support mirrored volumes.",
    "STATUS_VOLMGR_MIRROR_NOT_SUPPORTED"
  ],
	3224895580: [
    "The system does not support RAID-5 volumes.",
    "STATUS_VOLMGR_RAID5_NOT_SUPPORTED"
  ],
	3225026580: [
    "A virtual disk support provider for the specified file was not found.",
    "STATUS_VIRTDISK_PROVIDER_NOT_FOUND"
  ],
	3225026581: [
    "The specified disk is not a virtual disk.",
    "STATUS_VIRTDISK_NOT_VIRTUAL_DISK"
  ],
	3225026582: [
    "The chain of virtual hard disks is inaccessible. The process has not been granted access rights to the parent virtual hard disk for the differencing disk.",
    "STATUS_VHD_PARENT_VHD_ACCESS_DENIED"
  ],
	3225026583: [
    "The chain of virtual hard disks is corrupted. There is a mismatch in the virtual sizes of the parent virtual hard disk and differencing disk.",
    "STATUS_VHD_CHILD_PARENT_SIZE_MISMATCH"
  ],
	3225026584: [
    "The chain of virtual hard disks is corrupted. A differencing disk is indicated in its own parent chain.",
    "STATUS_VHD_DIFFERENCING_CHAIN_CYCLE_DETECTED"
  ],
	3225026585: [
    "The chain of virtual hard disks is inaccessible. There was an error opening a virtual hard disk further up the chain.",
    "STATUS_VHD_DIFFERENCING_CHAIN_ERROR_IN_PARENT"
  ]
};