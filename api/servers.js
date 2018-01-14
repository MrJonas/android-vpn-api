const express = require('express')
const app = express();
const basicAuth = require('express-basic-auth');
const users = require("./../mock-data/users");
app.use(basicAuth({users: users}));
app.get('/', (req, res) => {
    let d = new Date();
    console.log(d.getDate() + 'servers');
    res.json({servers: [
        {
            h: "207.246.96.153",
            l: "location",
            c: "207.246.96.153",
            cc: "LT",
            ca: [
                "MIIDHjCCAgagAwIBAgIJALjzok8oKw9PMA0GCSqGSIb3DQEBCwUAMA8xDTALBgNV",
                "BAMTBHZwbjEwHhcNMTgwMTEzMjA0NTQwWhcNMjgwMTExMjA0NTQwWjAPMQ0wCwYD",
                "VQQDEwR2cG4xMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzFzc/759",
                "KyJPN2veOvGrKyG05vq17UoctqjBfAez45PCQRbdiED8q/xMMQrsK7LTvEbWvc2b",
                "exjHy4Z0kArpc3Zhx5O2a+RA0Oz1/JbSz24/mQjwAGlNA1GfH7O0Ieg5Ai8DGmFn",
                "2ysU1mD9i8XtJsv/gQw2NVls8t2BujYIZRR+DujhGXOBjuhSy5s8EGGQ1OgTgMlj",
                "CF3cnlVupAF9qyrLoLMzfTe6piNYEXyHOher1z1ordl3ya93dR4DsoSV37SvHZW0",
                "rNat96iSl6wPd61+PkNAxytY8zedu2/R81r/FG8IIGN1WDgIuMsqDK4jd3nVX+xg",
                "IEahSFHFNxOxgQIDAQABo30wezAdBgNVHQ4EFgQUhWpzH0Mc/7R9pPzXvXmFxpCC",
                "GFwwPwYDVR0jBDgwNoAUhWpzH0Mc/7R9pPzXvXmFxpCCGFyhE6QRMA8xDTALBgNV",
                "BAMTBHZwbjGCCQC486JPKCsPTzAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIBBjAN",
                "BgkqhkiG9w0BAQsFAAOCAQEAWOyhMlw0d6r33ampCP0555qI5s0UnP15tTHubW27",
                "DdQ5ZNAocCgtqePyhGyhICNj3DW1tcm+MtcP2x0OWqq43JztbrvPO2gT3ypmfVw+",
                "RzOureYE4+tEyolWuMH43BHyGAgSNlzzEIRQdeT+Lsy2tTizpaiV/nVPULOnXHmx",
                "bdVYDUkudUMM5U1lP5wEUJFyKbKcch3op7x0LvtAhif+LOkgADUKNyLDDjVT9v+/",
                "Yk9gSxKtlR+/HC3NhxLfM3ZBQNr4R0y/6nfMOKyrJazMPltvaRM92hcV6GvTaivb",
                "vIrVB/1GbqoYnCx+2537O4nHBY8Yuzi01Wp/c3LtwP98Ig==",
            ],
            ta: [
                "a5652f588ac8a1b30ed6d88b8554cc83",
                "a4a1870f33da48623fb1972f060c0c6b",
                "7afe9047b2b8db7515ca0f2c698ef6b3",
                "f6254652d1bab8fe6e6df8248cdec1cd",
                "002d7989945f0b576371097f743ddd73",
                "68c149df1651c2ca89e1fda9569daf1e",
                "6a2ad9e290f2a9d80e6fc5b78e809ab0",
                "604ff7123bcec9532578f0292e62892b",
                "a73e24a3a151d403ed6e61e2a7b30475",
                "b1c65d453f5cdb1dbc78745ad24700cc",
                "40ec204bf06fb12f42c5b74f8b4f6bd2",
                "03bde0934b0a099d43852e361c952a1f",
                "ffc4264b26a04ad9ab6a27b4b295ec2f",
                "e310a27639e6f42882b399f424027720",
                "50be19031f0e73269641a2c40e9f5660",
                "058254605d8e7805dd132652f76ec5fd"
            ]
        },{
            h: "207.148.16.186",
            l: "location",
            c: "207.148.16.186",
            cc: "LV",
            ca: [
                "MIIDHjCCAgagAwIBAgIJALjzok8oKw9PMA0GCSqGSIb3DQEBCwUAMA8xDTALBgNV",
                "BAMTBHZwbjEwHhcNMTgwMTEzMjA0NTQwWhcNMjgwMTExMjA0NTQwWjAPMQ0wCwYD",
                "VQQDEwR2cG4xMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzFzc/759",
                "KyJPN2veOvGrKyG05vq17UoctqjBfAez45PCQRbdiED8q/xMMQrsK7LTvEbWvc2b",
                "exjHy4Z0kArpc3Zhx5O2a+RA0Oz1/JbSz24/mQjwAGlNA1GfH7O0Ieg5Ai8DGmFn",
                "2ysU1mD9i8XtJsv/gQw2NVls8t2BujYIZRR+DujhGXOBjuhSy5s8EGGQ1OgTgMlj",
                "CF3cnlVupAF9qyrLoLMzfTe6piNYEXyHOher1z1ordl3ya93dR4DsoSV37SvHZW0",
                "rNat96iSl6wPd61+PkNAxytY8zedu2/R81r/FG8IIGN1WDgIuMsqDK4jd3nVX+xg",
                "IEahSFHFNxOxgQIDAQABo30wezAdBgNVHQ4EFgQUhWpzH0Mc/7R9pPzXvXmFxpCC",
                "GFwwPwYDVR0jBDgwNoAUhWpzH0Mc/7R9pPzXvXmFxpCCGFyhE6QRMA8xDTALBgNV",
                "BAMTBHZwbjGCCQC486JPKCsPTzAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIBBjAN",
                "BgkqhkiG9w0BAQsFAAOCAQEAWOyhMlw0d6r33ampCP0555qI5s0UnP15tTHubW27",
                "DdQ5ZNAocCgtqePyhGyhICNj3DW1tcm+MtcP2x0OWqq43JztbrvPO2gT3ypmfVw+",
                "RzOureYE4+tEyolWuMH43BHyGAgSNlzzEIRQdeT+Lsy2tTizpaiV/nVPULOnXHmx",
                "bdVYDUkudUMM5U1lP5wEUJFyKbKcch3op7x0LvtAhif+LOkgADUKNyLDDjVT9v+/",
                "Yk9gSxKtlR+/HC3NhxLfM3ZBQNr4R0y/6nfMOKyrJazMPltvaRM92hcV6GvTaivb",
                "vIrVB/1GbqoYnCx+2537O4nHBY8Yuzi01Wp/c3LtwP98Ig==",
            ],
            ta: [
                "a5652f588ac8a1b30ed6d88b8554cc83",
                "a4a1870f33da48623fb1972f060c0c6b",
                "7afe9047b2b8db7515ca0f2c698ef6b3",
                "f6254652d1bab8fe6e6df8248cdec1cd",
                "002d7989945f0b576371097f743ddd73",
                "68c149df1651c2ca89e1fda9569daf1e",
                "6a2ad9e290f2a9d80e6fc5b78e809ab0",
                "604ff7123bcec9532578f0292e62892b",
                "a73e24a3a151d403ed6e61e2a7b30475",
                "b1c65d453f5cdb1dbc78745ad24700cc",
                "40ec204bf06fb12f42c5b74f8b4f6bd2",
                "03bde0934b0a099d43852e361c952a1f",
                "ffc4264b26a04ad9ab6a27b4b295ec2f",
                "e310a27639e6f42882b399f424027720",
                "50be19031f0e73269641a2c40e9f5660",
                "058254605d8e7805dd132652f76ec5fd"
            ]
        }
    ]});
});

module.exports = app;