# axios-api-utils

Axios Utils is a JavaScript library that provides a set of utility functions to enhance the functionality of the popular HTTP client library Axios. It is designed to simplify the process of making HTTP requests and provide additional features such as request cancellation, request timeout, global request and response interceptors, and more. With Axios Utils, developers can focus on building their application logic instead of worrying about the intricacies of managing HTTP requests. It is an open-source library that can be easily integrated into any JavaScript project that uses Axios for handling HTTP requests.

## Installation

```sh
npm install axios-api-utils

or

yarn add axios-api-utils

```

## Usage

To use Axios Request Cancel, import it into your project and create an instance of axios using createAxiosInstance():

```js
import { createAxiosInstance } from 'axios-request-cancel';

const axiosInstance = createAxiosInstance();

```

You can then use this instance of axios to make HTTP requests. Axios Request Cancel will automatically intercept the requests and add a cancel token to each one.

To cancel a request, call the cancelRequest() method on the axios instance and pass in the ID (will be the request url) of the request:

```js
axiosInstance.cancelRequest(id);

```

To cancel all pending requests, call the cancelAllRequests() method:

```js
axiosInstance.cancelAllRequests();
```

You can also set global configuration options for all requests by calling the setGlobalConfig() method:

```js
import { setGlobalConfig } from 'axios-request-cancel';

setGlobalConfig({
  baseURL: 'https://api.example.com',
  headers: {
    'Authorization': 'Bearer token'
  }
});
```
## Creating Multiple Instances

You can create multiple instances of axios with different configurations by calling the withConfig() method:

```js
const axiosInstance1 = axiosInstance.withConfig({
  baseURL: 'https://api.example.com'
});

const axiosInstance2 = axiosInstance.withConfig({
  baseURL: 'https://api.example.org'
});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
