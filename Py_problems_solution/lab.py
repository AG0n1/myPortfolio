import yfinance as yf
import matplotlib.pyplot as plt
ticker='AAPL'
start_date='2019-01-01'
end_date='2021-12-31'

data=yf.download(ticker,start=start_date, end=end_date)
print(data)
average_price=data['Close'].mean()

print("Средняя цена акции за указанный период:",average_price)

plt.plot(data['Close'])
plt.xlabel('Дата')
plt.ylabel('Цена акции')
plt.title('Динамика цены акции AAPL')
plt.show()
