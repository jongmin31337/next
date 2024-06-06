import Banner from '../components/Banner';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Banner />
            {children}
        </>
    )
}