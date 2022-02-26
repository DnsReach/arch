import React from 'react'
import WIFI from './wifi-component/wifi-comp'
import Part from './particionamento-compo/part'
import './comp.css'

const Component = () => {
    return (
        <>
            <article
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <h2 className="tag-titl">ARCH LINUX INSTALL</h2>

                <div className="keyboard-conf">
                    <ol>
                        <li>KEYBOARD CONFIG : </li>
                        <div className="text-desc">
                            <p
                                style={{
                                    textAlign: 'center',
                                    marginTop: '5px',
                                }}
                            >
                                loadkeys br-abnt2
                            </p>
                        </div>
                        <li style={{ marginTop: '30px' }}> WIFI CONNECT :</li>
                        <WIFI />
                        <p style={{ color: 'yellow' }}>
                            Use: timedate set-ntp true{' '}
                        </p>
                        <li style={{ marginTop: '30px' }}>PARTICIONATION :</li>
                        <Part />
                        <li style={{ marginTop: '30px' }}>PACKAGES :</li>
                        <p
                            style={{
                                textAlign: 'center',
                                fontSize: '18px',
                                paddingRight: '10px',
                                borderWidth: '2px',
                            }}
                        >
                            pacstrap /mnt base base-devel git vim grub
                            efibootmgr networkmanager linux-lts linux-firmware
                        </p>
                        <li style={{ marginTop: '30px' }}>UUID AND FSTAB:</li>
                        <p
                            style={{
                                fontSize: '18px',
                            }}
                        >
                            genfstab -U /mnt >> /mnt/etc/fstab arch-chroot /mnt
                            arch-chroot /mnt
                        </p>
                        <li style={{ marginTop: '30px' }}>LOCALE:</li>
                        <p
                            style={{
                                fontSize: '18px',
                            }}
                        >
                            vim /etc/locale.gen vim
                            <br /> /etc/locale.conf <br /> vim
                            /etc/vconsole.conf
                        </p>
                        <li style={{ marginTop: '30px' }}>
                            HOST - ROOT - REBOOT
                        </li>
                        <p
                            style={{
                                fontSize: '18px',
                            }}
                        >
                            vim /etc/hostname
                            <br /> /etc/hosts <br />
                            passwd <br />
                            exit
                        </p>
                        REBOOT
                    </ol>
                </div>
            </article>
        </>
    )
}

export default Component
