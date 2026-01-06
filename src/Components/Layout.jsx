import { Link, Outlet, useLocation } from 'react-router-dom'
import React from 'react'
// FiMenu and FiX are no longer needed as hamburger is removed

const Layout = () => {
    const location = useLocation();

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem',
        height: 'var(--nav-height)',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        borderBottom: 'var(--glass-border)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        overflowX: 'auto', /* Allow scrolling if screen is too small */
        overflowY: 'hidden'
    };

    const getLinkStyle = (path) => ({
        color: location.pathname === path ? 'var(--accent-cyan)' : 'var(--text-secondary)',
        fontWeight: location.pathname === path ? '600' : '400',
        padding: '0.5rem 0.8rem',
        whiteSpace: 'nowrap',
        fontSize: '0.95rem'
    });

    return (
        <>
            <header style={navStyle} className="no-scrollbar">
                <nav style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                    maxWidth: '800px',
                    margin: '0 auto',
                    height: '100%'
                }}>
                    <Link to='/' style={getLinkStyle('/')}>Home</Link>
                    <Link to='/telphers' style={getLinkStyle('/telphers')}>Тельфера</Link>
                    <Link to='/substation' style={getLinkStyle('/substation')}>ТП-32</Link>
                    <Link to='/machineTools' style={getLinkStyle('/machineTools')}>Станки</Link>
                </nav>
            </header>

            <main className='container' style={{
                minHeight: 'calc(100vh - var(--nav-height))',
                display: 'flex',
                background: `
                    radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.25) 0%, transparent 60%),
                    radial-gradient(circle at 85% 30%, rgba(198, 15, 122, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 15% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)
                `,
                backgroundAttachment: 'fixed' /* Parallax-like effect */
            }}>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
