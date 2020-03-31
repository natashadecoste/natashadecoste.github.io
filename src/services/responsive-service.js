// function for determining whether ton use mobile or desktop view
export const isMobileSize = () => {
    if (typeof window !== `undefined`) {
        return window.innerWidth <= 768;
    }
}