import ImageColors from 'react-native-image-colors';

export const getColores = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {});
    let primary;
    let secondary;

    switch (colors.platform) {
        case 'android':
            // android colors properties
            primary = colors.dominant;
            secondary = colors.average;
            const vibrantColor = colors.vibrant
            break
        case 'web':
            // web colors properties
            const lightVibrantColor = colors.lightVibrant
            break
        case 'ios':
            // iOS colors properties
            primary = colors.primary;
            secondary = colors.secondary;
            const primaryColor = colors.primary
            break
        default:
            throw new Error('Unexpected platform key')
    }
    // console.log(primary, secondary);

    return [
        primary,
        secondary,
    ];
}