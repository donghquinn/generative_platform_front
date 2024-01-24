const SongPlayer = (prop: {url: string}) =>
{
    const { url } = prop;

    return (
        <>
        <audio src={url}></audio></>
    )
};

export default SongPlayer;