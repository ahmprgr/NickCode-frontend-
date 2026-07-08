import { toast } from 'sonner';

/**
 * NickCode Custom Matrix Notification Engine
 * @param {string} title - Main title text (Persian or English)
 * @param {string} description - Subtext / System logs
 * @param {'success' | 'error' | 'warning' | 'info'} type - System alert pipeline type
 */
export const notify = (title, description = '', type = 'info') => {
    console.log("hello");
    
    // Define theme accents based on NickCode color profile
    const themeMap = {
        success: {
            border: 'border-emerald-500',
            glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]',
            label: 'SYS_SUCCESS',
            textColor: 'text-emerald-400'
        },
        error: {
            border: 'border-[#ff0000]',
            glow: 'shadow-[0_0_15px_rgba(255,0,0,0.2)]',
            label: 'CRITICAL_ERR',
            textColor: 'text-[#ff0000]'
        },
        warning: {
            border: 'border-amber-500',
            glow: 'shadow-[0_0_15px_rgba(245,158,11,0.15)]',
            label: 'SYS_WARNING',
            textColor: 'text-amber-400'
        },
        info: {
            border: 'border-[#3d0000]',
            glow: 'shadow-[0_0_10px_rgba(61,0,0,0.3)]',
            label: 'CORE_SIGNAL',
            textColor: 'text-slate-400'
        }
    };

    const currentTheme = themeMap[type] || themeMap.info;

    return toast.custom((t) => (
        <div
        className={`w-full max-w-sm bg-[#000000] border-2 ${currentTheme.border} ${currentTheme.glow} p-4 rounded-lg flex items-start justify-between gap-4 font-mono select-none text-right rtl`}
        dir="rtl"
        >
        <div className="flex-1 space-y-1">
        {/* Header Metadata Tag */}
        <div className="flex items-center gap-2">
        <span className={`text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#3d0000]/30 border border-[#950101]/20 ${currentTheme.textColor}`}>
        {currentTheme.label}
        </span>
        {description && (
            <span className="text-[9px] text-slate-600 font-mono tracking-tight">// STACK_TRACE</span>
        )}
        </div>

        {/* Title and Description */}
        <h4 className="text-sm font-black text-white pt-1">{title}</h4>
        {description && (
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed text-justify">
            {description}
            </p>
        )}
        </div>

        {/* Dismiss Trigger */}
        <button
        onClick={() => toast.dismiss(t)}
        className="text-[10px] text-slate-600 hover:text-[#ff0000] transition-colors font-mono self-start pt-1 cursor-pointer"
        >
        [X]
        </button>
        </div>
    ));
};
