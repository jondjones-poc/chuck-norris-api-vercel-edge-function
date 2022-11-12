export const config = {
  runtime: 'experimental-edge',
}

export default function handler(request, response) {
    var infoObject = {};

    response.status(200).json({
        body: "Test"; 
      });
  }
