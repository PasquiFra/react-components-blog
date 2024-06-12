import Card from './card/PostCard'
import postPic from '../assets/power-grid.jpeg'
import postPic2 from '../assets/grid-balance-texas.webp'
import postPic3 from '../assets/bitcoin-oro-digitale.png'

const Main = () => {

    const posts = [
        {
            title: 'Stabilizzare una rete elettrica grazie a Bitcoin',
            content: 'Nel contesto sempre più critico dell\'energia, ottimizzare l\'efficienza delle reti elettriche è diventato un obiettivo prioritario. Per garantire una distribuzione efficiente e sostenibile dell\'energia è fondamentale che il carico sulla rete elettrica sia mantenuto quanto più costante possibile. Anche se in un primo momento potrebbe essere contro intuitivo,  è infatti preferibile che il carico della rete si attesti intorno al suo carico medio piuttosto che avere picchi di richiesta e momenti di calma piatta. Un carico costante sulla rete elettrica comporta numerosi vantaggi. Aiuta a minimizzare le dispersioni e a ottimizzare l\'efficienza operativa complessiva, contribuisce a preservare la vita utile degli apparati e a minimizzare la necessità di manutenzione frequente, riduce i potenziali impatti negativi sulla fornitura di energia (blackout) e consente di ottimizzare le infrastrutture, riducendo la necessità di investimenti non pianificati. Questi punti sono già stati sollevati più volte dai gestori delle reti americane che hanno accolto di buon grado l\'arrivo dei miner. Il tutto però sottostà ad una condizione, ovvero che i miner riducano la loro domanda sulla rete nei momenti in cui c\'è o si prevede un picco.Il video quindi è la riprova che questa simbiosi non solo è possibile, ma è quello che accade realmente, con reciproco beneficio di tutte le parti coinvolte.',
            image: postPic
        },
        {
            title: 'Bilanciare la rete elettrica: il caso del Texas',
            content: 'Al Texas Blockchain Summit di ottobre, Cruz ha sottolineato la capacità dei minatori di bitcoin di accendere o spegnere i loro impianti in pochi secondi – una funzione che è estremamente vantaggiosa durante i periodi in cui l’energia deve essere spostata di nuovo sulla rete per soddisfare la domanda. “Se hai un momento in cui hai una carenza di energia o una crisi di potere, che si tratti di un congelamento o di qualche altro disastro naturale in cui la capacità di generazione di energia scende, ciò crea la capacità di spostare istantaneamente quell’energia per rimetterla sulla rete”, ha detto Cruz della capacità dei minatori di bitcoin di chiudere le loro operazioni in pochi secondi. Queste fluttuazioni corrispondono anche alle oscillazioni di prezzo volatili della rete. Connell dice alla CNBC che nel 2020, il prezzo dell’energia nel Texas occidentale è stato negativo tra il 10% e il 20% delle volte. Il prezzo è in calo sotto zero quando l\'offerta supera la domanda. Finora quest’anno, il prezzo dell’energia all’ora ha un prezzo negativo del 9% delle volte, mentre il 5% di tutte le ore quest’anno ha raggiunto il picco sopra i 100 dollari.',
            image: postPic2
        },
        {
            title: 'Bitcoin oro digitale? Il perché nell’analisi di BlackRock',
            content: 'Il metallo prezioso è attivo di chi lo possiede senza essere passivo di qualcun altro. Tale qualità trasforma la divisa digitale in un bene privato, anche rispetto ad un sistema di transazioni che hanno natura pubblica e condivisa; in buona sostanza il possesso di bitcoin è la detenzione esclusiva di “qualcosa” per la quale il detentore non deve niente a nessuno. Inoltre, il Bitcoin ha in comune con l’oro un’altra peculiarità importante, ovvero la scarsità. Tuttavia, mentre per l’oro abbiamo una scarsità naturale dovuta alla sua disponibilità limitata in natura e alle difficoltà di estrazione, per Bitcoin si parla ad hoc di scarsità artificiale, perché la componente di limitatezza è stata voluta ed implementata nel codice sorgente di bitcoin direttamente dal suo ideatore. In estrema sintesi, se l’oro è di per sé scarso, il bitcoin è stato progettato per essere scarso. Tutto questo è minutamente descritto nel White Paper, il protocollo – statuto di bitcoin: la somma complessiva di bitcoin in circolazione aumenterà man mano fino a stabilizzarsi, restituendo oltre al resto complessità crescenti nall’attività di estrazione di nuovi bitcoin nel momento in cui ci si avvicina alla cifra prestabilita. Invero, pare proprio che Satoshi Nakamoto avesse voluto replicare le difficoltà di estrazione che caratterizzano la produzione dell’oro. ',
            image: postPic3
        },
    ]

    return (
        <main className='container'>
            {posts.map((post, i) => {
                return <Card key={i} post={post}></Card>
            })}
        </main>
    )
}

export default Main
