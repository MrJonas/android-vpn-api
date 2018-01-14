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
            h: "hostname",
            l: "location",
            c: "country",
            cc: "LT",
            ca: [
                "MIIDHjCCAgagAwIBAgIJAJzsqTQrGC/WMA0GCSqGSIb3DQEBCwUAMA8xDTALBgNV",
                "BAMTBHZwbjEwHhcNMTcxMjI0MTQyNDIxWhcNMjcxMjIyMTQyNDIxWjAPMQ0wCwYD",
                "VQQDEwR2cG4xMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2SwSUUWS",
                "6F527fcVtpacbuoU+h9okyDLMbU1rmgucOcEQdXKmuj4UrBVVT/6JqrCBW3ORhlt",
                "RbM/Vbawzzm9WX3rxSlUTUnHrz643hLHzV9W1mgH8aaPmu/BB5TgMQmxz3rhSzoS",
                "adK5mHZ7adZD0wcrboVsYnFtu7rHRyvz07GdCt+KWgVL9O60CCz1cZdKNdnqFS0i",
                "m6uFA8A56i85Yhddv638w3cqv8udiklXk+502JX8wXtP3+OzIpgu0bKzwJkXylAi",
                "pdPfcioaaqUpz2I2a+lO0eeiQ78WkpDDg0az3RLEt7YHdPSqnojV22s7YB32FgTM",
                "pWjlVq2VU+fPjQIDAQABo30wezAdBgNVHQ4EFgQUHNAB3qC0/kQZzUWMc3eQtN+n",
                "3ygwPwYDVR0jBDgwNoAUHNAB3qC0/kQZzUWMc3eQtN+n3yihE6QRMA8xDTALBgNV",
                "BAMTBHZwbjGCCQCc7Kk0Kxgv1jAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIBBjAN",
                "BgkqhkiG9w0BAQsFAAOCAQEANgEllt7XzvBkcwx6a5rUwZtqemYRc+pJWZc7hHIr",
                "+2geRva5ZJaAc/dB31AEFyDF9HT8KTYzDmICTOLYXDJPHQocHN6drZ2HsnDnW2d1",
                "5djFk0oGieBVBmPpxu9v90cxejHgUjZId8baSPEo/ka0HTaP6EXbX7acn5219HwE",
                "4IfNHcacZzb3soB2Tl7QggpvKYuU7+WZmfV0iOKqFPaSNXFqcyOQBzhpoY6QLPm3",
                "vUIqZ2MTexIBs0MLgqzcLeufzSJeIdxaBxJK/7St77pe1oLVcvwsj8Tw4ZymVU3X",
                "8zp8puMN75tn6fzeA+CUfLV2WpBOl/bxgV3Ckjt8HF2RpA=="
            ],
            ta: [
                "111a5aa8d57865ebf1f7a5de3fcada59",
                "dd3e6ab94890c9326659cc5158904d93",
                "02c05c8c62d30c0bcf54d6849959cc73",
                "f7b27deecb3e2e878f8cc137223cd00c",
                "4ad14e8f6afc768ee8abe7dcc21d72eb",
                "3284d3d632a8a6037eecc79a31840c45",
                "6170ace59b9d28aaf85e2c9d2d50eb07",
                "f8e6ccc6206136ba5ebeeea37cb7f3e6",
                "1e4829ae3e0ed526b03dccb8c865251f",
                "7452fb54db6f098c3f7fea403672ea9b",
                "04745cad7a51fa6cd1a4c4df1f0be9b8",
                "8bcd46e8160aee614b8f72c548985056",
                "b7a2860e9c8e941d6ed32c6d2b34f106",
                "884263bfa2af75eb87b9b161764559ac",
                "17246b27e0c4a9721a45081eae40bc15",
                "b23e449fda48be07ebed019331f39ceb"
            ]
        },{
            h: "hostname",
            l: "location",
            c: "country",
            cc: "LT",
            ca: [
                "MIIDHjCCAgagAwIBAgIJAJzsqTQrGC/WMA0GCSqGSIb3DQEBCwUAMA8xDTALBgNV",
                "BAMTBHZwbjEwHhcNMTcxMjI0MTQyNDIxWhcNMjcxMjIyMTQyNDIxWjAPMQ0wCwYD",
                "VQQDEwR2cG4xMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2SwSUUWS",
                "6F527fcVtpacbuoU+h9okyDLMbU1rmgucOcEQdXKmuj4UrBVVT/6JqrCBW3ORhlt",
                "RbM/Vbawzzm9WX3rxSlUTUnHrz643hLHzV9W1mgH8aaPmu/BB5TgMQmxz3rhSzoS",
                "adK5mHZ7adZD0wcrboVsYnFtu7rHRyvz07GdCt+KWgVL9O60CCz1cZdKNdnqFS0i",
                "m6uFA8A56i85Yhddv638w3cqv8udiklXk+502JX8wXtP3+OzIpgu0bKzwJkXylAi",
                "pdPfcioaaqUpz2I2a+lO0eeiQ78WkpDDg0az3RLEt7YHdPSqnojV22s7YB32FgTM",
                "pWjlVq2VU+fPjQIDAQABo30wezAdBgNVHQ4EFgQUHNAB3qC0/kQZzUWMc3eQtN+n",
                "3ygwPwYDVR0jBDgwNoAUHNAB3qC0/kQZzUWMc3eQtN+n3yihE6QRMA8xDTALBgNV",
                "BAMTBHZwbjGCCQCc7Kk0Kxgv1jAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIBBjAN",
                "BgkqhkiG9w0BAQsFAAOCAQEANgEllt7XzvBkcwx6a5rUwZtqemYRc+pJWZc7hHIr",
                "+2geRva5ZJaAc/dB31AEFyDF9HT8KTYzDmICTOLYXDJPHQocHN6drZ2HsnDnW2d1",
                "5djFk0oGieBVBmPpxu9v90cxejHgUjZId8baSPEo/ka0HTaP6EXbX7acn5219HwE",
                "4IfNHcacZzb3soB2Tl7QggpvKYuU7+WZmfV0iOKqFPaSNXFqcyOQBzhpoY6QLPm3",
                "vUIqZ2MTexIBs0MLgqzcLeufzSJeIdxaBxJK/7St77pe1oLVcvwsj8Tw4ZymVU3X",
                "8zp8puMN75tn6fzeA+CUfLV2WpBOl/bxgV3Ckjt8HF2RpA=="
            ],
            ta: [
                "111a5aa8d57865ebf1f7a5de3fcada59",
                "dd3e6ab94890c9326659cc5158904d93",
                "02c05c8c62d30c0bcf54d6849959cc73",
                "f7b27deecb3e2e878f8cc137223cd00c",
                "4ad14e8f6afc768ee8abe7dcc21d72eb",
                "3284d3d632a8a6037eecc79a31840c45",
                "6170ace59b9d28aaf85e2c9d2d50eb07",
                "f8e6ccc6206136ba5ebeeea37cb7f3e6",
                "1e4829ae3e0ed526b03dccb8c865251f",
                "7452fb54db6f098c3f7fea403672ea9b",
                "04745cad7a51fa6cd1a4c4df1f0be9b8",
                "8bcd46e8160aee614b8f72c548985056",
                "b7a2860e9c8e941d6ed32c6d2b34f106",
                "884263bfa2af75eb87b9b161764559ac",
                "17246b27e0c4a9721a45081eae40bc15",
                "b23e449fda48be07ebed019331f39ceb"
            ]
        }
    ]});
});

module.exports = app;