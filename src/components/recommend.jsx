import { useContext, useState } from "react"
import {Context} from '../components/globalState'

function Recommend() {
    const [display, setDisplay] = useState('flex')
    const { Songs, playlist, setPlaylist } = useContext(Context)
    const handleTypeMusic = (type) => {
        switch(type){
            case 'YOUNG': {
                const dataPlaylist = Songs['newDay'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'EDM': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'REFORMIST': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'USUK': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'KOREA': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'SAD': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'RAP': {
                const dataPlaylist = Songs['newDay'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'PERFORM': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.album.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'JAPAN': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'CHILL': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))  
                setDisplay('hidden')
                break
            }
            default:
                throw new Error('This type music is not exist')
        }
    }

    return (  
        <div className={`${!playlist.id ? display : 'hidden'} justify-center items-center w-full h-full fixed z-[1] top-0 bg-[rgba(255,255,255,.3)] align-center`}>
            <div className="w-[460px] h-[315px] bg-[#222] rounded-[20px] px-[10px]">
                <h1 className="text-center py-2">H??y ch???n th??? lo???i m?? b???n y??u th??ch</h1>
                <div className="grid grid-cols-3">
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'YOUNG'}>
                        Nh???c tr???
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'EDM'}>
                        Nh???c EDM
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'REFORMIST'}>
                        Nh???c c???i l????ng
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'USUK'}>
                        Nh???c USUK
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'KOREA'}>
                        Nh???c H??n
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'SAD'}>
                        Nh???c bu???n
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'RAP'}>
                        Nh???c Rap
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'PERFORM'}>
                        Nh???c h??a t???u
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'JAPAN'}>
                        Nh???c Nh???t
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'CHILL'}>
                        Nh???c chill
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recommend;