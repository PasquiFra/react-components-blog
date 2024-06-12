const Footer = () => {
    const links = [
        'https://www.alpsblockchain.com/media-news/simbiosi-tra-mining-e-rete-elettrica',
        'https://twitter.com/BitcoinNewsCom/status/1747416254602686527',
        'https://twitter.com/BitcoinNewsCom/status/1747416254602686527/video/1',
        'https://twitter.com/BitcoinNewsCom/status/1747416254602686527/video/2',
        'https://cryptonomist.ch/2024/01/18/bitcoin-mining-hashrate-crollo-texas/',
    ]

    return (
        <footer className="mt-5">
            <strong>Credits to: </strong>
            <ul>
                {links.map((link, index) => {
                    return <li key={index}><a href={link}>{link}</a></li>
                })}
            </ul>
        </footer>
    )
}

export default Footer