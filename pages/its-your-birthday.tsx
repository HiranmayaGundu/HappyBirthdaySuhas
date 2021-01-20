import Box from "@material-ui/core/Box";
export default function BirthdayVideo() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <iframe
        width={1000}
        height={563}
        src="https://www.youtube.com/embed/dVGF6Cxw7Bk"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
}
