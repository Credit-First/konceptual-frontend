import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC, MouseEventHandler, useCallback, useEffect, useMemo, useRef, useState, CSSProperties, MouseEvent, ReactElement, ReactNode } from 'react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { WalletConnectButton } from '@solana/wallet-adapter-react-ui';
import { WalletIcon } from '@solana/wallet-adapter-react-ui';

export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    endIcon?: ReactElement;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    startIcon?: ReactElement;
    style?: CSSProperties;
    tabIndex?: number;
    children?: ReactNode;
    onUseWalletClick: () => void;
    color: string;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            className={`mx-6 bg-transparent text-${props.color} cursor-pointer flex items-center text-base font-bold h-10 px-0 py-4 ${props.className || ''}`}
            disabled={props.disabled}
            onClick={props.onClick}
            tabIndex={props.tabIndex || 0}
            type="button"
        >
            {props.startIcon && <i className="wallet-adapter-button-start-icon">{props.startIcon}</i>}
            {props.children}
            {props.endIcon && <i className="wallet-adapter-button-end-icon">{props.endIcon}</i>}
        </button>
    );
};

export const WalletButton: FC<ButtonProps> = ({ children, ...props }) => {
    const { publicKey, wallet, disconnect } = useWallet();
    const { setVisible } = useWalletModal();
    const [copied, setCopied] = useState(false);
    const [active, setActive] = useState(false);
    const ref = useRef<HTMLUListElement>(null);

    const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
    const content = useMemo(() => {
        // if (children) return children;
        if (!wallet || !base58) return null;
        return base58.slice(0, 4) + '..' + base58.slice(-4);
    }, [children, wallet, base58]);

    const copyAddress = useCallback(async () => {
        if (base58) {
            await navigator.clipboard.writeText(base58);
            setCopied(true);
            setTimeout(() => setCopied(false), 400);
        }
    }, [base58]);

    const openDropdown = useCallback(() => {
        setActive(true);
    }, []);

    const closeDropdown = useCallback(() => {
        setActive(false);
    }, []);

    const openModal = useCallback(() => {
        setVisible(true);
        closeDropdown();
    }, [closeDropdown]);

    useEffect(() => {
        const listener: any = (event: MouseEvent | TouchEvent) => {
            const node = ref.current;

            // Do nothing if clicking dropdown or its descendants
            if (!node || node.contains(event.target as Node)) return;

            closeDropdown();
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, closeDropdown]);

    if (!wallet) return <_WalletModalButton {...props}>{children}</_WalletModalButton>;
    if (!base58) return <_WalletConnectButton {...props}>{children}</_WalletConnectButton>;

    return (
        <div className="">
            <Button
                aria-expanded={active}
                className=""
                style={{ pointerEvents: active ? 'none' : 'auto', ...props.style }}
                onClick={openDropdown}
                startIcon={<WalletIcon wallet={wallet} />}
                {...props}
            >
                {content}
            </Button>
            <ul
                aria-label="dropdown-list"
                className={`wallet-adapter-dropdown-list ${active && 'wallet-adapter-dropdown-list-active'}`}
                ref={ref}
                role="menu"
            >
                <li onClick={copyAddress} className="wallet-adapter-dropdown-list-item" role="menuitem">
                    {copied ? 'Copied' : 'Copy address'}
                </li>
                <li onClick={openModal} className="wallet-adapter-dropdown-list-item" role="menuitem">
                    Change wallet
                </li>
                <li onClick={disconnect} className="wallet-adapter-dropdown-list-item" role="menuitem">
                    Disconnect
                </li>
            </ul>
        </div>
    );
};

export const _WalletModalButton: FC<ButtonProps> = ({ children, onClick, ...props }) => {
    const { visible, setVisible } = useWalletModal();

    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (onClick) onClick(event);
            if (!event.defaultPrevented) setVisible(!visible);
        },
        [onClick, visible]
    );

    return (
        <Button className="" onClick={handleClick} {...props}>
            {!children && (
                <div className='cursor-pointer ml-4 flex py-2 px-4'>
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M21.3329 9.99984H20.6663V5.99984C20.6663 5.82303 20.596 5.65346 20.471 5.52843C20.346 5.40341 20.1764 5.33317 19.9996 5.33317H3.9996C3.84174 5.33575 3.68809 5.28221 3.56601 5.1821C3.44393 5.082 3.36133 4.94181 3.33294 4.7865V4.5465C3.36133 4.3912 3.44393 4.25101 3.56601 4.1509C3.68809 4.05079 3.84174 3.99726 3.9996 3.99984H19.7196C19.8964 3.99984 20.066 3.9296 20.191 3.80458C20.316 3.67955 20.3863 3.50998 20.3863 3.33317C20.3863 3.15636 20.316 2.98679 20.191 2.86177C20.066 2.73674 19.8964 2.6665 19.7196 2.6665H3.9996C3.46917 2.6665 2.96046 2.87722 2.58539 3.25229C2.21032 3.62736 1.9996 4.13607 1.9996 4.6665C1.99492 4.74644 1.99492 4.82657 1.9996 4.9065V18.6198C2.00222 18.9788 2.07551 19.3337 2.2153 19.6643C2.35509 19.995 2.55863 20.2948 2.8143 20.5468C3.06997 20.7987 3.37277 20.9978 3.7054 21.1328C4.03803 21.2677 4.39399 21.3358 4.75294 21.3332H19.9996C20.1764 21.3332 20.346 21.2629 20.471 21.1379C20.596 21.0129 20.6663 20.8433 20.6663 20.6665V16.6665H21.3329C21.5097 16.6665 21.6793 16.5963 21.8043 16.4712C21.9294 16.3462 21.9996 16.1766 21.9996 15.9998V10.6665C21.9996 10.4897 21.9294 10.3201 21.8043 10.1951C21.6793 10.0701 21.5097 9.99984 21.3329 9.99984ZM19.3329 19.9998H4.75294C4.38214 20.0034 4.02492 19.8604 3.759 19.602C3.49307 19.3436 3.33995 18.9906 3.33294 18.6198V6.5865C3.54934 6.64922 3.77451 6.67624 3.9996 6.6665H19.3329V9.99984H14.6663C13.7822 9.99984 12.9344 10.351 12.3092 10.9761C11.6841 11.6013 11.3329 12.4491 11.3329 13.3332C11.3329 14.2172 11.6841 15.0651 12.3092 15.6902C12.9344 16.3153 13.7822 16.6665 14.6663 16.6665H19.3329V19.9998ZM20.6663 15.3332H14.6663C14.1358 15.3332 13.6271 15.1225 13.2521 14.7474C12.877 14.3723 12.6663 13.8636 12.6663 13.3332C12.6663 12.8027 12.877 12.294 13.2521 11.919C13.6271 11.5439 14.1358 11.3332 14.6663 11.3332H20.6663V15.3332Z'
                            fill={props.color}
                        />
                        <path
                            d='M15.3398 14.3335C15.8921 14.3335 16.3398 13.8858 16.3398 13.3335C16.3398 12.7812 15.8921 12.3335 15.3398 12.3335C14.7876 12.3335 14.3398 12.7812 14.3398 13.3335C14.3398 13.8858 14.7876 14.3335 15.3398 14.3335Z'
                            fill={props.color}
                        />
                    </svg>
                </div>
            )}
        </Button>
    );
};

export const _WalletConnectButton: FC<ButtonProps> = ({ children, disabled, onClick, ...props }) => {
    const { wallet, connect, connecting, connected } = useWallet();

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            if (onClick) onClick(event);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            if (!event.defaultPrevented) connect().catch(() => {});
        },
        [onClick, connect]
    );

    const content = useMemo(() => {
        if (children) return children;
        if (connecting) return 'Connecting ...';
        if (connected) return 'Connected';
        if (wallet) return 'Connect';
        return 'Connect Wallet';
    }, [children, connecting, connected, wallet]);

    return (
        <Button
            className={`mx-6 bg-transparent text-${props.color} cursor-pointer flex items-center text-base font-bold h-10 px-0 py-4`}
            disabled={disabled || !wallet || connecting || connected}
            startIcon={wallet ? <WalletIcon wallet={wallet} /> : undefined}
            onClick={handleClick}
            {...props}
        >
            {content}
        </Button>
    );
};